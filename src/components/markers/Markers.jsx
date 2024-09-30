// Markers.jsx
import React from "react";
import { Marker } from "react-map-gl/maplibre";
import Daytime from "../daytime/Daytime"; // Importar el nuevo componente
import styles from './Markers.module.css';

function Markers({ comedores, onSelect }) {
  return (
    <>
      {comedores.map((comedor, index) => {
        const [latitude, longitude] = comedor.Coordenadas.split(",").map(Number);
        return (
          <Marker
            key={index}
            longitude={longitude}
            latitude={latitude}
            onClick={() => onSelect(comedor)}
          >
            <Daytime prestacionAlimentaria={comedor["Prestacion alimentaria"]} /> {/* Usar Daytime aquí */}
          </Marker>
        );
      })}
    </>
  );
}

export default Markers;
