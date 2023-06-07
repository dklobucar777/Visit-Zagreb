import React, { useState } from "react";
import styles from "./PlacesCards.module.css";
import PlaceCard from "../PlaceCard/PlaceCard.tsx";
import TA_1 from "../../assets/TA_1.png";

function PlacesCards() {
  const [myArray, setMyArray] = useState([1, 2, 3, 4]);
  const x = myArray.map((element, index) => {
    const card = index;
    return (
      <div>
        <PlaceCard
          element={card}
          image={TA_1}
          title={"OTHER EXPERIENCE"}
          text={"From Zagreb: Plitvice Lakes and Rastoke Day Trip"}
        ></PlaceCard>
      </div>
    );
  });

  return <div className={styles.PlacesCards}>{x}</div>;
}

export default PlacesCards;
