import { useState } from "react";
import MapGL, { NavigationControl } from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import styles from './Mapa.module.css';
import comedores from "../data/comedores.json";
import Markers from "../markers/Markers";
import Screen from "../screen/Screen";

function Mapa() {
  const mapProps = {
    initialViewState: {
      longitude: 58.3816,
      latitude: -34.6037,
      zoom: 1.5,
      minZoom: 1,
      maxZoom: 25,
      maxBounds: [
        [-58.59, -34.8], // Límite inferior-izquierdo
        [-58.31, -34.478], // Límite superior-derecho
      ],
    },
    style: {
      width: "100vw",
      height: "100vh",
    },
  };

  const [selectedComedor, setSelectedComedor] = useState(null);

  const handleSelectComedor = (comedor) => {
    setSelectedComedor(comedor);
  };

  return (
    <div className={styles.mapa}>
      <MapGL
        {...mapProps}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="https://tiles.stadiamaps.com/styles/alidade_smooth.json"
        mapLib={maplibregl}
        mapOptions={{
          // Opciones de mapa adicionales si es necesario
        }}
      >
        <NavigationControl position="top-left" />
        <Markers comedores={comedores} onSelect={handleSelectComedor} />
        {selectedComedor && <Screen comedor={selectedComedor} />}
      </MapGL>
    </div>
  );
}

export default Mapa;
