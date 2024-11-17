import styles from './Colaborar.module.css';

function Colaborar() {
  const steps = [
    {
      title: "Paso 1",
      description: "Elegí en el mapa el comedor/merendero/olla popular con el que quieras colaborar.",
      graphic: "🌍", // Placeholder para un gráfico o ícono
    },
    {
      title: "Paso 2",
      description: "Hacé click en el ícono y observá la información que se despliega (a la izquierda si estás en una computadora; abajo si ingresás desde un celular).",
      graphic: "👆", // Placeholder
    },
    {
      title: "Paso 3",
      description: "Abajo de todo encontrarás el nombre de la persona responsable y su contacto (mail / teléfono / redes sociales).",
      graphic: "📋", // Placeholder
    },
    {
      title: "Paso 4",
      description: "Comunicate directamente con el comedor/merendero/olla popular que elijas para ofrecer tu colaboración. Nota: El Mapa de los Comedores NO recibe donaciones.",
      graphic: "📞", // Placeholder
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
          <div className={styles.graphic}>
            <span>{step.graphic}</span>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Colaborar;
