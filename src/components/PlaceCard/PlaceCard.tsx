import React, { FC } from "react";
import styles from "./PlaceCard.module.css";

interface PlaceCardProps {
  element: number;
  image: string;
  title: string;
  text: string;
}

const PlaceCard: FC<PlaceCardProps> = ({ element, image, title, text }) => {
  return (
    <div>
      <div>{element}</div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default PlaceCard;
