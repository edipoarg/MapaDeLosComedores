import styles from './Colaborar.module.css';
import { GiKnifeFork } from "react-icons/gi";
import { PiCookingPot, PiBowlSteam } from "react-icons/pi";
import { MdOutlineChurch } from "react-icons/md";

function Colaborar() {
  const steps = [
    {
      title: "Paso 1",
      description: "Elegí en el mapa el comedor/merendero/olla popular con el que quieras colaborar.",
      graphic: (
        <div className={styles.circleContainer}>
          <div className={styles.icon} style={{ color: '#0dceea' }}>
            <GiKnifeFork />
          </div>
          <div className={styles.icon} style={{ color: '#ff8ce9' }}>
            <PiBowlSteam />
          </div>
          <div className={styles.icon} style={{ color: '#afeb00' }}>
            <PiCookingPot />
          </div>
          <div className={styles.icon} style={{ color: '#bc71e7' }}>
            <MdOutlineChurch />
          </div>
        </div>
      ),
    },
    {
      title: "Paso 2",
      description: "Hacé click en el ícono y observá la información que se despliega (a la izquierda si estás en una computadora; abajo si ingresás desde un celular).",
      graphic: "👆",
    },
    {
      title: "Paso 3",
      description: "Abajo de todo encontrarás el nombre de la persona responsable y su contacto (mail / teléfono / redes sociales).",
      graphic: "📋",
    },
    {
      title: "Paso 4",
      description: "Comunicate directamente con el comedor/merendero/olla popular que elijas para ofrecer tu colaboración. Nota: El Mapa de los Comedores NO recibe donaciones.",
      graphic: "📞",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>¡Cómo Colaborar?</h1>
      {steps.map((step, index) => (
        <section key={index} className={styles.section}>
          <div className={styles.text}>
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </div>
          <div className={styles.graphic}>{step.graphic}</div>
        </section>
      ))}
    </div>
  );
}

export default Colaborar;
