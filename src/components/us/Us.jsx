import styles from './Us.module.css';
import comedoresFoto from "../data/comedores.jpg"

function Us() {
  return (
    <div className={styles.container}>
      <img src={comedoresFoto} alt="Imagen de comedores" className={styles.image} />
      <h1 className={styles.title}>MAPA DE LOS COMEDORES</h1>
      <h2 className={styles.subtitle}>La ciudad solidaria</h2>
      <p className={styles.description}>
        Somos un conjunto de organizaciones de la sociedad civil de la Ciudad de Buenos Aires que todos los días sostenemos comedores y merenderos comunitarios. 
        Esperamos que este Mapa de los Comedores sea un aporte a la visibilización y valoración de cada persona que dedica su tiempo y su trabajo para tenderle una mano a miles de otras en estos momentos difíciles. 
        Buenos Aires es una Ciudad solidaria..
      </p>
    </div>
  );
}

export default Us;
