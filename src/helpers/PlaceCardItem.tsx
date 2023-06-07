import React from "react";
import TA_1 from "../assets/TA_1.png";
import TA_2 from "../assets/TA_2.png";
import TA_3 from "../assets/TA_3.png";
import TA_4 from "../assets/TA_4.png";

const PlaceCardItem = () => {
  const places = [
    {
      title: "OTHER EXPERIENCE",
      image: TA_1,
      text: "From Zagreb: Plitvice Lakes and Rastoke Day Trip",
    },
    {
      title: "GUIDED TOUR",
      image: TA_2,
      text: "Zagreb: Small-Group Walking Tour with Funicular Ride",
    },
    {
      title: "HOP-ON HOP-OFF TOUR",
      image: TA_3,
      text: "Hop On Hop Off Panoramic bus - Zagreb City Tour",
    },
    {
      title: "DAY TRIP",
      image: TA_4,
      text: "From Zagreb: Ljubljana and Lake Bled Tour",
    },
  ];

  return (
    <div>
      {/* Render the place cards */}
      {places.map((place, index) => (
        <div key={index}>
          <img src={place.image} alt={place.title} />
          <h3>{place.title}</h3>
          <p>{place.text}</p>
        </div>
      ))}
    </div>
  );
};

export default PlaceCardItem;
