import { useState } from "react";
import MapGL, { NavigationControl } from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import styles from './Mapa.module.css';
import comedores from "../data/comedores.json";
import Markers from "../markers/Markers";
import Screen from "../screen/Screen";
import Filtros from "../Filtros/Filtros";

// GEOJSON IMPORTS
import {
  caba,
  barriosCaba
} from "./geojson-data/index";

import {
  CabaSource,
  BarriosCabaSource,
  InversoCabaSource,
} from "../Sources";

function Mapa() {
  const mapProps = {
    initialViewState: {
      longitude: 58.3816,
      latitude: -34.6037,
      zoom: 1,
      minZoom: 1,
      maxZoom: 25,
      maxBounds: [
        [-58.9, -35], // Límite inferior-izquierdo
        [-58, -34.44], // Límite superior-derecho
      ],
    },
    style: {
      width: "100vw",
      height: "100vh",
    },
  };

  const [selectedComedor, setSelectedComedor] = useState(null);
  const [filter, setFilter] = useState(null); // Estado para el filtro activo

  const handleSelectComedor = (comedor) => {
    setSelectedComedor(comedor);
  };
  const handleFilterChange = (tipo) => {
    setFilter((prevFilter) => (prevFilter === tipo ? null : tipo)); // Alternar entre seleccionar y deseleccionar
  };


  // Filtrar comedores según el filtro activo
  const filteredComedores = filter
    ? comedores.filter((comedor) => comedor["Tipo de espacio"] === filter)
    : comedores;

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
        <CabaSource data={caba} />
        <BarriosCabaSource data={barriosCaba} />
        <InversoCabaSource data={caba}/>
        <Markers comedores={filteredComedores} onSelect={handleSelectComedor} />
        <Screen comedor={selectedComedor} />
      <Filtros selectedFilter={filter} onFilterChange={handleFilterChange}/>
        

      </MapGL>
    </div>
  );
}

export default Mapa;
