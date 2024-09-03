import React from "react";
import { Marker } from "react-map-gl/maplibre";
import styles from './Markers.module.css';

function Markers({ comedores, onSelect }) {
  return (
    <>
      {comedores.map((comedor, index) => {
        // Asegúrate de que las coordenadas estén en el formato correcto
        const [latitude, longitude] = comedor.Coordenadas.split(",").map(Number);
        return (
          <Marker
            key={index}
            longitude={longitude}
            latitude={latitude}
            onClick={() => onSelect(comedor)}
          >
            <div className={styles.marker}></div>
          </Marker>
        );
      })}
    </>
  );
}

export default Markers;
