// Daytime.jsx
import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { PiCookingPot, PiBowlSteam } from "react-icons/pi";
import { MdOutlineChurch } from "react-icons/md";

const Daytime = ({ prestacionAlimentaria }) => {
  // Verificar que el valor se está recibiendo correctamente
  console.log("Prestacion Alimentaria:", prestacionAlimentaria);
  
  let icon = null;
  let backgroundColor = "";

  switch (prestacionAlimentaria) {
    case "comedor":
      icon = <GiKnifeFork />;
      backgroundColor = "#3469eb";
      break;
    case "merendero":
      icon = <PiBowlSteam />;
      backgroundColor = "#ff8ce9"; 
      break;
    case "olla popular":
      icon = <PiCookingPot />;
      backgroundColor = "#afeb00";
      break;
    case "parroquia":
      icon = <MdOutlineChurch />;
      backgroundColor = "#eeff00"; 
      break;
    default:
      icon = <GiKnifeFork />;
      backgroundColor = "gray"; // Valor por defecto
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
      }}
    >
      {icon}
    </div>
  );
};

export default Daytime;
