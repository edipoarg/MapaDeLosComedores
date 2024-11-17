import { GiKnifeFork } from "react-icons/gi";
import { PiCookingPot, PiBowlSteam } from "react-icons/pi";
import { MdOutlineChurch } from "react-icons/md";
import styles from './Filtros.module.css';

/* eslint-disable react/prop-types */
function Filtros({ selectedFilter, onFilterChange }) {
  const filtros = [
    { tipo: 'Comedor', color: '#0dceea', icono: <GiKnifeFork /> },
    { tipo: 'Merendero', color: '#ff8ce9', icono: <PiBowlSteam /> },
    { tipo: 'Olla popular', color: '#afeb00', icono: <PiCookingPot /> },
    { tipo: 'Parroquia', color: '#bc71e7', icono: <MdOutlineChurch /> },
  ];

  return (
    <div className={styles.filtrosContainer}>
        <h2 className={styles.filtrosTitle}>FILTROS</h2>
      {filtros.map((filtro, index) => (
        <button
          key={index}
          className={`${styles.filtroItem} ${selectedFilter === filtro.tipo ? styles.selected : ''}`}
          style={{
            backgroundColor: selectedFilter === filtro.tipo ? 'white' : filtro.color,
            color: selectedFilter === filtro.tipo ? filtro.color : '#fff',
          }}
          onClick={() => onFilterChange(filtro.tipo)}
        >
          <div className={styles.icon}>{filtro.icono}</div>
          <p className={styles.texto}>{filtro.tipo}</p>
        </button>
      ))}
    </div>
  );
}

export default Filtros;
