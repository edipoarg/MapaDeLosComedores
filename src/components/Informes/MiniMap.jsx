import styles from "./MiniMap.module.css";
import MapGL, { Source, Layer, Marker } from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import caba from "../mapa/geojson-data/caba.json";

// Datos de comedores por comuna
const dataComedores = {
  1: 34,
  2: 3,
  3: 11,
  4: 44,
  5: 5,
  6: 5,
  7: 28,
  8: 52,
  9: 8,
  10: 1,
  11: 6,
  12: 5,
  13: 3,
  14: 4,
  15: 14,
};

// Coordenadas aproximadas del centro de cada comuna en CABA
const comunaCoordinates = {
  1: [-34.60882197206947, -58.37362970907621],
  2: [-34.59041194847756, -58.39745065633386],
  3: [-34.61324977215789, -58.40233857164446],
  4: [-34.63903143343215, -58.37377322998251],
  5: [-34.61706730437905, -58.420203601877695],
  6: [-34.61547327644663, -58.445424861026964],
  7: [-34.63593860718513, -58.45177296459606],
  8: [-34.673560108664255, -58.46502714487121],
  9: [-34.653139960991915, -58.51141673898146],
  10: [-34.625598529987016, -58.50292725728968],
  11: [-34.60381696993907, -58.49872514945574],
  12: [-34.56068829753156, -58.48985445161874],
  13: [-34.55499892745779, -58.45555313389802],
  14: [-34.57690951306515, -58.4251690703938],
  15: [-34.59346605329753, -58.46487912211723],
};

const MiniMap = () => {
  const mapProps = {
    initialViewState: {
      longitude: -58.4416,
      latitude: -34.6037,
      zoom: 10,
    },
    dragPan: false, // Deshabilitar el movimiento del mapa
    scrollZoom: false, // Deshabilitar el zoom con la rueda del ratón
  };

  return (
    <div className={styles.mapContainer}>
      <MapGL
        {...mapProps}
        mapLib={maplibregl}
      >
        {/* Cargar el geojson de la ciudad */}
        <Source id="caba" type="geojson" data={caba}>
          <Layer
            id="caba-layer"
            type="fill"
            paint={{
              "fill-color": "#fff",
              "fill-opacity": 0.8,
            }}
          />
          <Layer
            id="caba-border"
            type="line"
            paint={{
              "line-color": "#000",
              "line-width": 2,
            }}
          />
        </Source>

        {/* Agregar los pines con la cantidad de comedores */}
        {Object.keys(comunaCoordinates).map((comunaId) => {
          const coords = comunaCoordinates[comunaId];
          const comedoresCount = dataComedores[comunaId];

          return (
            <Marker key={comunaId} longitude={coords[1]} latitude={coords[0]}>
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "50%",
                  width: "30px", // Tamaño del pin
                  height: "30px", // Asegura que sea un círculo
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "14px", // Ajuste del tamaño del texto
                  transform: "translate(-50%, -50%)", // Centrar el pin en el punto exacto
                }}
              >
                {comedoresCount}
              </div>
            </Marker>
          );
        })}
      </MapGL>
    </div>
  );
};

export default MiniMap;
