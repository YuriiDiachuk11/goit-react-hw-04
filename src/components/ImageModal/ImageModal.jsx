import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, imageData }) => {
  const { urls, alt_description, description, likes, user } = imageData;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={s.modal}
      overlayClassName={s.overlay}
      closeTimeoutMS={100}
    >
      <div className={s.content}>
        <button className={s.closeButton} onClick={onRequestClose}>
          &times;
        </button>
        <img
          className={s.image}
          src={urls?.regular}
          alt={alt_description || "Image"}
        />
        <div className={s.info}>
          <p className={s.description}>{description}</p>
          <p className={s.author}>AUTHOR: {user.name}</p>
          <p className={s.likes}>LIKES: {likes}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
