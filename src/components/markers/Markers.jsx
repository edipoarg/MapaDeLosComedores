import React from "react";
import { Marker } from "react-map-gl/maplibre";
import Daytime from "../daytime/Daytime"; // Importar el componente Daytime

function Markers({ comedores, onSelect }) {
  return (
    <>
      {comedores.map((comedor, index) => {
        const [latitude, longitude] = comedor.Coordenadas.split(",").map(Number);

        // Verificar si las coordenadas son válidas antes de renderizar el marcador
        if (
          isNaN(latitude) ||
          isNaN(longitude) ||
          latitude === 0 ||
          longitude === 0
        ) {
          return null; // No renderizar si las coordenadas no son válidas
        }

        return (
          <Marker
            key={index}
            longitude={longitude}
            latitude={latitude}
            onClick={() => onSelect(comedor)}
          >
            <Daytime prestacionAlimentaria={comedor["Tipo de espacio"]} />
          </Marker>
        );
      })}
    </>
  );
}

export default Markers;
