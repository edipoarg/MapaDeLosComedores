// Daytime.jsx
import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { PiCookingPot, PiBowlSteam } from "react-icons/pi";
import { MdOutlineChurch } from "react-icons/md";

const Daytime = ({ prestacionAlimentaria }) => {
  let icon = null;
  let backgroundColor = "";

  switch (prestacionAlimentaria) {
    case "Comedor":
      icon = <GiKnifeFork style={{ color: "#69a7f5", fontSize: "15px" }} />;
      backgroundColor = "#3469eb";
      break;
    case "Merendero":
      icon = <PiBowlSteam style={{ color: "#9366eb", fontSize: "15px" }} />;
      backgroundColor = "#ff8ce9"; 
      break;
    case "Olla popular":
      icon = <PiCookingPot style={{ color: "#39b00c", fontSize: "15px" }} />;
      backgroundColor = "#afeb00";
      break;
    case "Parroquia":
      icon = <MdOutlineChurch style={{ color: "#f77b63", fontSize: "15px" }} />;
      backgroundColor = "#eeff00"; 
      break;
    default:
      icon = <GiKnifeFork style={{ color: "#f77b63", fontSize: "15px" }} />;
      backgroundColor = "#eeff00"; // Valor por defecto
  }

  return (
    <div
      style={{
        background: backgroundColor,
        borderRadius: "50%",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
        fontSize: "20px",
        maxWidth: "5vw",
        border: "solid 1px black",
      }}
    >
      {icon}
    </div>
  );
};

export default Daytime;
