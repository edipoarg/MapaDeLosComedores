/* eslint-disable react/prop-types */
import styles from './Screen.module.css';

function Screen({ comedor }) {
  if (!comedor) {
    return null; // No renderizar nada si no hay un comedor seleccionado
  }

  return (
    <div className={styles.screen}>
      <div className={styles.dataSection}>
        <div className={styles.titleBox}>
          <h3>{comedor["Comedor (nombre)"] || "Nombre no disponible"}</h3>
          {comedor["Organización a la que pertenece"] && (
            <p><strong>Organización:</strong> {comedor["Organización a la que pertenece"]}</p>
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
          <div className={styles.socialIcons}>
            {/* Asegúrate de reemplazar `comedor["Redes Sociales"]` con el nombre correcto de la propiedad o crear iconos aquí */}
            {comedor["Redes Sociales"] && comedor["Redes Sociales"].map((red, index) => (
              <a key={index} href={red.url} target="_blank" rel="noopener noreferrer">
                {/* Aquí podrías incluir los iconos de las redes sociales, por ejemplo, usando `react-icons` */}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.timeSection}>
        {comedor["Frecuencia de funcionamiento"] && (
          <p><strong>Frecuencia:</strong> {comedor["Frecuencia de funcionamiento"]}</p>
        )}
        {comedor["Días de funcionamiento"] && (
          <p><strong>Días:</strong> {comedor["Días de funcionamiento"]}</p>
        )}
        {comedor["Horarios de funcionamiento"] && (
          <p><strong>Horarios:</strong> {comedor["Horarios de funcionamiento"]}</p>
        )}
        {comedor["Prestacion alimentaria"] && (
          <p><strong>Prestación:</strong> {comedor["Prestacion alimentaria"]}</p>
        )}
      </div>
    </div>
  );
}

export default Screen;
