import { useEffect, useState } from "react";
import fetchImages from "../services/api";
import Loader from "./Loader/Loader";
import { Toaster } from "react-hot-toast";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import SearchBar from "./SearchBar/SearchBar";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const getData = async () => {
      if (!query) return;
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchImages(query, page);
        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSearchSubmit = (searchTerm) => {
    setImages([]);
    setQuery(searchTerm);
    setPage(1);
    setTotalPages(0);
  };

  const openModal = (imageData) => {
    if (!isModalOpen) {
      setSelectedImage(imageData);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {isLoading && <Loader />}
      <Toaster />
      {images.length > 0 && (
        <ImageGallery
          images={images}
          onImageClick={(card) => openModal(card)}
        />
      )}
      {isError && <ErrorMessage />}
      {images.length > 0 && page < totalPages && !isLoading && (
        <LoadMoreBtn
          onClick={() => setPage((prev) => prev + 1)}
          disabled={isLoading}
        />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          imageData={selectedImage}
        />
      )}
      <ScrollToTop />
    </div>
  );
}

export default App;
