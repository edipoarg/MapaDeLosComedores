import styles from './Filtros.module.css';


function Filtros() {


  return (
    <div
      className={styles.container}
   
    >
        <div className={styles.tipo}>
            <div className={styles.icono}></div>
      <h3 className={styles.title}>Comedor</h3>
      </div>
      <div className={styles.tipo}>
            <div className={styles.icono}></div>
      <h3 className={styles.title}>Olla Popular</h3>
      </div>
      <div className={styles.tipo}>
            <div className={styles.icono}></div>
      <h3 className={styles.title}>Parroquia</h3>
      </div>
      <div className={styles.tipo}>
            <div className={styles.icono}></div>
      <h3 className={styles.title}>Merendero</h3>
      </div>
    </div>

  );
}

export default Filtros;
