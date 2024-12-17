import { useState } from "react";
import s from "./ImageCard.module.css";

const ImageCard = ({ card, onImageClick }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={s.imageBox}>
      {!loaded && <div className={s.skeleton}></div>}
      <img
        className={`${s.image} ${loaded ? s.loaded : ""}`}
        src={card.urls.small}
        alt={card.alt_description || "Image"}
        onClick={() => onImageClick(card)}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default ImageCard;
