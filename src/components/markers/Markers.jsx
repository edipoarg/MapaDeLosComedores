import React from "react";
import { Marker } from "react-map-gl/maplibre";
import Daytime from "../daytime/Daytime";

function Markers({ comedores, onSelect }) {
  return (
    <>
      {comedores.map((comedor, index) => {
        const [latitude, longitude] = comedor.Coordenadas.split(",").map(Number);

        if (isNaN(latitude) || isNaN(longitude) || latitude === 0 || longitude === 0) {
          return null;
        }

        // Determinar el tamaño del pin según las raciones diarias
        let size;
        const racionesDiarias = comedor["Cuantas raciones diarias entrega?"];
        if (racionesDiarias <= 100) {
          size = "small"; // Tamaño pequeño
        } else if (racionesDiarias <= 500) {
          size = "medium"; // Tamaño mediano
        } else {
          size = "large"; // Tamaño grande
        }

        return (
          <Marker
            key={index}
            longitude={longitude}
            latitude={latitude}
            onClick={() => onSelect(comedor)}
          >
            <Daytime prestacionAlimentaria={comedor["Tipo de espacio"]} size={size} />
          </Marker>
        );
      })}
    </>
  );
}

export default Markers;
