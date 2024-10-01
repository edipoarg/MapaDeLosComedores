// Daytime.jsx
import { TbSunset2, TbSunMoon } from "react-icons/tb";
import { IoBagHandle } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoPartlySunny } from "react-icons/io5";
import { MdSunny } from "react-icons/md";


const DaytimeSky = ({ prestacionAlimentaria }) => {
  let icon = null;
  let backgroundColor = "";

  switch (prestacionAlimentaria) {
    case "Almuerzo":
      icon = <MdSunny style={{ color: "yellow", fontSize: "14vh", filter: "drop-shadow(0 0 10px yellow)" }} />;
      backgroundColor = "#3469eb"; // Celeste
      break;
    case "Desayuno":
      icon = <TbSunset2 style={{ color: "orange", fontSize: "14vh", filter: "drop-shadow(0 0 10px orange)" }} />;
      backgroundColor = "#fff700"; // Amarillo
      break;
    case "Merienda":
      icon = <IoPartlySunny style={{ color: "pink", fontSize: "14vh", filter: "drop-shadow(0 0 10px pink)" }} />;
      backgroundColor = "#ff8ce9"; // Naranja
      break;
    case "Cena":
      icon = <BsMoonStarsFill style={{ color: "violet", fontSize: "14vh", filter: "drop-shadow(0 0 10px violet)" }} />;
      backgroundColor = "#afeb00"; // Violeta oscuro
      break;
    case "Viandas":
      icon = <IoBagHandle style={{ color: "#4dd5d9", fontSize: "14vh", filter: "drop-shadow(0 0 10px #4dd5d9)" }} />;
      backgroundColor = "#a0e1e1"; // Verde agua
      break;
    case "Almuerzo y Merienda":
      icon = <TbSunMoon style={{ color: "green", fontSize: "14vh", filter: "drop-shadow(0 0 10px yellow)" }} />;
      backgroundColor = "linear-gradient(to right, #3469eb, #ff8ce9)"; // Degradado
      break;
    case "Desayuno y Almuerzo":
      icon = <TbSunMoon style={{ color: "pink", fontSize: "14vh", filter: "drop-shadow(0 0 10px pink)" }} />;
      backgroundColor = "linear-gradient(to right, #fff700, #3469eb)"; // Degradado
      break;
    case "Desayuno y Cena":
      icon = <TbSunMoon  style={{ color: "blue", fontSize: "14vh", filter: "drop-shadow(0 0 10px blue)" }} />;
      backgroundColor = "linear-gradient(to right, #fff700, #afeb00)"; // Degradado
      break;
    case "Cena y Merienda":
      icon = <TbSunMoon  style={{ color: "violet", fontSize: "14vh", filter: "drop-shadow(0 0 10px violet)" }} />;
      backgroundColor = "linear-gradient(to right, #afeb00, #ff8ce9)"; // Degradado
      break;
    case "Almuerzo, Merienda, Desayuno y Cena":
      icon = <TbSunMoon style={{ color: "orange", fontSize: "14vh", filter: "drop-shadow(0 0 10px orange)" }} />;
      backgroundColor = "linear-gradient(to right, #3469eb, #ffed00, #ff8ce9, #afeb00)"; // Degradado
      break;
    default:
      icon = <TbSunMoon  style={{ color: "yellow", fontSize: "14vh", filter: "drop-shadow(0 0 10px yellow)" }} />;
      backgroundColor = "#eeff00"; // Valor por defecto
  }

  return (
    <div
      style={{
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        color: "black",
        marginTop: "-8vh",
        opacity: 0.8, // Translucido
        padding: "10px", // Espaciado para dar efecto de sombra interna
      }}
    >
      {icon}
    </div>
  );
};

export default DaytimeSky;
