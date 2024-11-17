import { TbSunset2, TbSunMoon } from "react-icons/tb";
import { IoBagHandle } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoPartlySunny } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import styles from "./DaytimeSky.module.css";

// eslint-disable-next-line react/prop-types
const DaytimeSky = ({ prestacionAlimentaria, raciones }) => {
  let icon = null;
  let backgroundColor = "";
  let backgroundImage = "";

  switch (prestacionAlimentaria) {
    case "Almuerzo":
      icon = <MdSunny className={styles.icon} style={{ color: "yellow" }} />;
      backgroundColor = "lightblue";
      break;
    case "Desayuno":
      icon = <TbSunset2 className={styles.icon} style={{ color: "orange" }} />;
      backgroundColor = "#fff700";
      break;
    case "Merienda":
      icon = <IoPartlySunny className={styles.icon} style={{ color: "purple" }} />;
      backgroundColor = "#ff8ce9";
      break;
    case "Cena":
      icon = <BsMoonStarsFill className={styles.icon} style={{ color: "violet" }} />;
      backgroundColor = "darkblue";
      break;
    case "Viandas":
      icon = <IoBagHandle className={styles.icon} style={{ color: "#4dd5d9" }} />;
      backgroundColor = "violet";
      break;
    case "Almuerzo y merienda":
      icon = <TbSunMoon className={styles.icon} style={{ color: "yellow" }} />;
      backgroundColor = "yellowgreen";
      break;
    case "Desayuno y almuerzo":
      icon = <TbSunMoon className={styles.icon} style={{ color: "purple" }} />;
      backgroundImage = "linear-gradient(to right, #fff700, #3469eb)";
      break;
    case "Desayuno, almuerzo y merienda":
      icon = <TbSunMoon className={styles.icon} style={{ color: "yellowgreen" }} />;
      backgroundImage = "linear-gradient(to right, purple, yellowgreen)";
      break;
    case "Desayuno y cena":
      icon = <TbSunMoon className={styles.icon} style={{ color: "pink" }} />;
      backgroundImage = "linear-gradient(to right, purple, blue)";
      break;
    case "Almuerzo y cena":
      icon = <TbSunMoon className={styles.icon} style={{ color: "blue" }} />;
      backgroundImage = "linear-gradient(to right, #fff700, #afeb00)";
      break;
    case "Cena y Merienda":
      icon = <TbSunMoon className={styles.icon} style={{ color: "violet" }} />;
      backgroundImage = "linear-gradient(to right, #afeb00, #ff8ce9)";
      break;
    case "Almuerzo, Merienda, Desayuno y Cena":
      icon = <TbSunMoon className={styles.icon} style={{ color: "orange" }} />;
      backgroundImage = "linear-gradient(to right, #3469eb, #ffed00, #ff8ce9, #afeb00)";
      break;
    default:
      icon = <TbSunMoon className={styles.icon} style={{ color: "white" }} />;
      backgroundColor = "grey";
  }

  return (
    <section className={styles.dataIcons}>
      <div
        className={styles.container}
        style={{
          backgroundColor: backgroundColor,
          backgroundImage: backgroundImage ? backgroundImage : "none",
        }}
      >
        {icon} {/* Always show the icon */}
      </div>
      {raciones && <div className={styles.raciones}>{raciones}</div>} {/* Show raciones only if it has a value */}
    </section>
  );
};

export default DaytimeSky;
