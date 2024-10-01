/* eslint-disable react/prop-types */
import styles from './Screen.module.css';
import DaytimeSky from '../daytimeSky/daytimeSky'; 

function Screen({ comedor }) {
  if (!comedor) {
    return null;
  }

  const getTitleColor = (tipoEspacio) => {
    switch (tipoEspacio) {
      case "Comedor":
        return "#69a7f5";
      case "Merendero":
        return "#9366eb";
      case "Olla popular":
        return "#39b00c";
      case "Parroquia":
        return "#f77b63";
      default:
        return "#f27025";
    }
  };

  const getBackgroundColor = (tipoEspacio) => {
    switch (tipoEspacio) {
      case "Comedor":
        return "#3469eb";
      case "Merendero":
        return "#ff8ce9";
      case "Olla popular":
        return "#afeb00";
      case "Parroquia":
        return "#eeff00";
      default:
        return "#eeff00"; 
    }
  };

  const tipoEspacio = comedor["Tipo de espacio"]; 

  return (
    <div className={styles.screen}>
      <div
        className={styles.timeSection}
        style={{ backgroundColor: getTitleColor(tipoEspacio) }}
      >
        <DaytimeSky prestacionAlimentaria={comedor["Prestacion alimentaria"]} />
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
          style={{ background: getBackgroundColor(tipoEspacio) }} 
        >
          <h3 style={{ color: getTitleColor(tipoEspacio) }}>
            {comedor["Espacio (nombre)"] || ""}
          </h3>
          {comedor["Organización a la que pertenece"] && (
            <p>Organización: <strong>{comedor["Organización a la que pertenece"]}</strong></p>
          )}
          {comedor["Dirección exacta"] && (
            <p>
              <strong>Dirección:</strong> {comedor["Dirección exacta"]}, {comedor["Barrio"] && (
                <strong>{comedor["Barrio"]}</strong>
              )}
            </p>
          )}
        </div>
        <div className={styles.contactBox}>
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
