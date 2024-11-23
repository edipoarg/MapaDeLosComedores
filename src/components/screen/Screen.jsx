/* eslint-disable react/prop-types */
import { IoLogoWhatsapp } from "react-icons/io5";
import styles from './Screen.module.css';
import DaytimeSky from '../daytimeSky/daytimeSky';

function Screen({ comedor }) {
  if (!comedor) {
    return (
      <div className={styles.screen}>
        <div className={styles.defaultMessage}>
          <h2 className={styles.defaultTitle}>¡Bienvenido/a al Mapa de los Comedores!</h2>
          <p className={styles.defaultText}>
            Navegá en el mapa para conocer comedores, merenderos y ollas populares de toda la Ciudad de Buenos Aires y acercar tu solidaridad. 
            Cliqueá y accedé a toda la información.
          </p>
        </div>
      </div>
    );
  }

  const getTitleColor = (tipoEspacio) => {
    switch (tipoEspacio) {
      case "Comedor":
      case "Merendero":
      case "Olla popular":
      case "Parroquia":
        return "#333";
      default:
        return "#333";
    }
  };

  const getBackgroundColor = (tipoEspacio) => {
    switch (tipoEspacio) {
      case "Comedor":
        return "#0dceea";
      case "Merendero":
        return "#ff8ce9";
      case "Olla popular":
        return "#afeb00";
      case "Parroquia":
        return "#bc71e7";
      default:
        return "#0dceea"; 
    }
  };

  const tipoEspacio = comedor["Tipo de espacio"];
  const rawWhatsappNumber = comedor["Contacto del/la responsable"];

  // Validación del número de WhatsApp
  const isValidWhatsAppNumber = (number) => {
    if (number == null) return false;

    const cleanNumber = number
      .toString() // Convierte el número a cadena si es necesario
      .replace(/[^0-9]/g, ''); // Elimina caracteres no numéricos

    return cleanNumber.length === 10; // Acepta exactamente 10 dígitos
  };

  const cleanWhatsAppNumber = rawWhatsappNumber
    ? rawWhatsappNumber.toString().replace(/[^0-9]/g, '') // Limpia y convierte a cadena
    : null;

  return (
    <div className={styles.screen}>
      <div
        className={styles.timeSection}
        style={{ backgroundColor: "none" }}
      >
        <DaytimeSky 
          prestacionAlimentaria={comedor["Prestacion alimentaria"]} 
          raciones={comedor["Cuantas raciones diarias entrega?"]}
        />
        
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
          <h3
            className={styles.name}
            style={{ color: getTitleColor(tipoEspacio) }}
          >
            {comedor["Espacio (nombre)"] || ""}
          </h3>
        </div>
        <div className={styles.contactBox}>
          <div className={styles.contactInfo}>
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

          <section className={styles.colaboraBox}>
        <div className={styles.colaboraHeader}>
          <h4>COLABORÁ</h4>
          {cleanWhatsAppNumber && isValidWhatsAppNumber(cleanWhatsAppNumber) && (
            <a
              href={`https://wa.me/54${cleanWhatsAppNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              <section className={styles.colabora}>
           
                
                <IoLogoWhatsapp />
              </section>
            </a>
          )}
</div>
    {comedor["Responsable"] && (
              <p><strong>Responsable:</strong> {comedor["Responsable"]}</p>
            )}
            {comedor["Contacto del/la responsable"] && (
              <p><strong>Contacto:</strong> {comedor["Contacto del/la responsable"]}</p>
            )}
          

          </section>
         
        </div>
      </div>
    </div>
  );
}

export default Screen;
