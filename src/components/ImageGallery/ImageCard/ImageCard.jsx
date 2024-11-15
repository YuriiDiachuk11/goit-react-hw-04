import s from "./ImageCard.module.css";

const ImageCard = ({ card, onImageClick }) => {
  return (
    <div className={s.imageBox}>
      <img
        className={s.image}
        src={card.urls.small}
        alt={card.alt_description || "Image"}
        onClick={() => onImageClick(card)}
      />
    </div>
  );
};

export default ImageCard;
