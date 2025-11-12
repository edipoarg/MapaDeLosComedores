import { useState, useEffect } from "react";
import MapGL, { NavigationControl } from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import styles from "./Mapa.module.css";
import comedores from "../data/comedores.json";
import Markers from "../markers/Markers";
import Screen from "../screen/Screen";
import Filtros from "../Filtros/Filtros";

// GEOJSON IMPORTS
import { caba, barriosCaba } from "./geojson-data/index";
import {
  CabaSource,
  BarriosCabaSource,
  InversoCabaSource,
} from "../Sources";

function Mapa() {
  // Detectar si es mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mapProps = {
    initialViewState: {
      longitude: -58.4416, // CORREGIDO: CABA es negativa
      latitude: -34.6037, // Centro exacto de CABA
      zoom: isMobile ? 10.5 : 11.5, // Más lejos en mobile
      minZoom: 9,
      maxZoom: 17,
      maxBounds: [
        [-58.9, -34.75], // Límite inferior-izquierdo
        [-58.25, -34.45], // Límite superior-derecho
      ],
    },
    style: {
      width: "100vw",
      height: "100vh",
    },
  };

  const [selectedComedor, setSelectedComedor] = useState(null);
  const [filter, setFilter] = useState(null);

  const handleSelectComedor = (comedor) => setSelectedComedor(comedor);

  const handleFilterChange = (tipo) =>
    setFilter((prev) => (prev === tipo ? null : tipo));

  const filteredComedores = filter
    ? comedores.filter((c) => c["Tipo de espacio"] === filter)
    : comedores;

  return (
    <div className={styles.mapa}>
      <MapGL
        {...mapProps}
        mapStyle="https://tiles.stadiamaps.com/styles/alidade_smooth.json"
        mapLib={maplibregl}
      >
        <NavigationControl position="bottom-right" />
        <CabaSource data={caba} />
        <BarriosCabaSource data={barriosCaba} />
        <InversoCabaSource data={caba} />
        <Markers comedores={filteredComedores} onSelect={handleSelectComedor} />
        <Screen comedor={selectedComedor} />
        <Filtros selectedFilter={filter} onFilterChange={handleFilterChange} />
      </MapGL>
    </div>
  );
}

export default Mapa;
