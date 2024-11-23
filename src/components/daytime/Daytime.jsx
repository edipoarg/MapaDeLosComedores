/* eslint-disable react/prop-types */
import { GiKnifeFork } from "react-icons/gi";
import { PiCookingPot, PiBowlSteam } from "react-icons/pi";
import { MdOutlineChurch } from "react-icons/md";

const Daytime = ({ prestacionAlimentaria, size, isSelected }) => {
  let icon = null;
  let backgroundColor = "";
  let styles = {};

  switch (prestacionAlimentaria) {
    case "Comedor":
      icon = <GiKnifeFork style={{ color: isSelected ? "white" : "white", fontSize: "13px" }} />;
      backgroundColor = "#0dceea";
      break;
    case "Merendero":
      icon = <PiBowlSteam style={{ color: isSelected ? "white" : "#9366eb", fontSize: "13px" }} />;
      backgroundColor = "#ff8ce9";
      break;
    case "Olla popular":
      icon = <PiCookingPot style={{ color: isSelected ? "white" : "#39b00c", fontSize: "13px" }} />;
      backgroundColor = "#afeb00";
      break;
    case "Parroquia":
      icon = <MdOutlineChurch style={{ color: isSelected ? "white" : "white", fontSize: "13px" }} />;
      backgroundColor = "#a930ea";
      break;
    default:
      icon = <GiKnifeFork style={{ color: isSelected ? "white" : "white", fontSize: "13px" }} />;
      backgroundColor = "#0dceea";
  }

  // Definir estilos según el tamaño
  if (size === "small") {
    styles = { padding: "3px", fontSize: "4px", maxWidth: "3vw" };
  } else if (size === "medium") {
    styles = { padding: "8px", fontSize: "18px", maxWidth: "6vw" };
  } else if (size === "large") {
    styles = { padding: "12px", fontSize: "25px", maxWidth: "8vw" };
  }

  return (
    <div
      style={{
        background: isSelected ? "black" : backgroundColor, // Cambiar fondo si está seleccionado
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: isSelected ? "white" : "black", // Cambiar texto si está seleccionado
        border: "solid 2px white",
        boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.5)",
        ...styles,
      }}
    >
      {icon}
    </div>
  );
};

export default Daytime;