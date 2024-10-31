import { Source, Layer } from "react-map-gl/maplibre";
import PropTypes from "prop-types";

export const BarriosCabaSource = ({ data }) => (
  <Source id="barriosCaba-source" type="geojson" data={data}>
    <Layer
      id="barriosCaba-layer"
      type="fill"
      paint={{
        "fill-color": "grey",
        "fill-opacity": 0.1,
        "fill-outline-color": "violet",
      }}
    />
  </Source>
);

export const CabaSource = ({ data }) => (
  <Source id="caba-source" type="geojson" data={data}>
    <Layer
      id="caba-layer"
      type="fill"
      paint={{
        "fill-color": "rgba(255, 255, 255, 0)",
        "fill-opacity": 1,
        "fill-outline-color": "black",
      }}
    />
    <Layer
      id="Caba-border"
      type="line"
      paint={{
        "line-color": "black",
        "line-width": 1.5,
        "line-opacity": 0.3,
      }}
    />
  </Source>
);

// Capa inversa en rojo para el área fuera del fill
export const InversoCabaSource = ({ data }) => (
  <Source id="inverso-caba-source" type="geojson" data={data}>
  <Layer
    id="inverso-caba-layer"
    type="fill"
    paint={{
      "fill-color": "grey",
      "fill-opacity": 0.1,
    }}
  />
  <Layer
    id="inverso-caba-outline"
    type="line"
    paint={{
      "line-color": "black",
      "line-width": 2,
      "line-opacity": 0.6,
    }}
  />
</Source>
);

const SourcePropTypes = {
  data: PropTypes.any,
};

BarriosCabaSource.propTypes = SourcePropTypes;
CabaSource.propTypes = SourcePropTypes;
InversoCabaSource.propTypes = SourcePropTypes;
