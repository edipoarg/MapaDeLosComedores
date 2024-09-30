/* eslint-disable react/prop-types */
// Screen.jsx
import styles from './Screen.module.css';
import Daytime from '../daytime/Daytime'; // Importa el componente Daytime

function Screen({ comedor }) {
  if (!comedor) {
    return null; // No renderizar nada si no hay un comedor seleccionado
  }

  return (
    <div className={styles.screen}>
      <div className={styles.timeSection}>
        {/* Mostrar el icono y la prestación alimentaria */}
        <Daytime prestacionAlimentaria={comedor["Prestacion alimentaria"]} />
        {comedor["Prestacion alimentaria"] && (
          <h2>{comedor["Prestacion alimentaria"]}</h2>
        )}
        
        {comedor["Frecuencia de funcionamiento"] && (
          <p><strong>Frecuencia:</strong> {comedor["Frecuencia de funcionamiento"]}</p>
        )}
        {comedor["Días de funcionamiento"] && (
          <p><strong>Días:</strong> {comedor["Días de funcionamiento"]}</p>
        )}
        {comedor["Horarios de funcionamiento"] && (
          <p><strong>Horarios:</strong> {comedor["Horarios de funcionamiento"]}</p>
        )}
      </div>

      <div className={styles.dataSection}>
        <div
          className={styles.titleBox}
          style={{
            background: Daytime({ prestacionAlimentaria: comedor["Prestacion alimentaria"] }).props.style.background,
          }}
        >
          <h3>{comedor["Comedor (nombre)"] || "Nombre no disponible"}</h3>
          {comedor["Organización a la que pertenece"] && (
            <p>Organización: <strong>{comedor["Organización a la que pertenece"]}</strong> </p>
          )}
        </div>
        <div className={styles.contactBox}>
          {comedor["Dirección exacta"] && (
            <p><strong>Dirección:</strong> {comedor["Dirección exacta"]}, {comedor["Barrio"] && (
              <strong>{comedor["Barrio"]}</strong>
            )}</p>
          )}
          {comedor["Responsable"] && (
            <p><strong>Responsable:</strong> {comedor["Responsable"]}</p>
          )}
          {comedor["Contacto del/la responsable"] && (
            <p><strong>Contacto:</strong> {comedor["Contacto del/la responsable"]}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Screen;
