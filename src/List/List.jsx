/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './List.module.css';
import comedores from '../components/data/comedores.json'; // Importa el JSON directamente

function List() {
  if (!comedores || comedores.length === 0) {
    return <p>No hay información de comedores disponible.</p>;
  }

  return (
    <div className={styles.listContainer}>
      <h2>Listado de Comedores</h2>
      <ul className={styles.list}>
        {comedores.map((comedor, index) => (
          <li key={index} className={styles.listItem}>
            <div className={styles.titleSection}>
              <h3 className={styles.title}>{comedor["Espacio (nombre)"] || "Nombre no disponible"}</h3>
              <p className={styles.type}>{comedor["Tipo de espacio"]}</p>
            </div>
            <p><strong>Dirección:</strong> {comedor["Dirección exacta"] || "No disponible"}</p>
            <p><strong>Barrio:</strong> {comedor["Barrio"] || "No disponible"}</p>
            <Link to={`/comedor/${index}`} className={styles.detailLink}>
              Ver detalles
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
