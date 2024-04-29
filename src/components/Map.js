import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import DeckGL from '@deck.gl/react';
import { GeoJsonLayer } from '@deck.gl/layers';

const MapComponent = ({ map, geoJsonVisible }) => {
  const geoJsonLayer = new GeoJsonLayer({
    id: 'geojson-layer',
    data: '/Location data.geojson',
    visible: geoJsonVisible,
    getFillColor: [255, 0, 0, 128],
    getLineColor: [0, 0, 255],
    getLineWidth: 2,
    pickable: true
  });

  // Update visibility when prop changes
  geoJsonLayer.visible = geoJsonVisible;

  return <DeckGL layers={[geoJsonLayer]} map={map} />;
};

const MapContainer = ({ geoJsonVisible }) => {
  const mapElement = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map(mapElement.current, {
        center: [28.6139, 77.2090],
        zoom: 12
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);
    }

    return () => {
      // Clean up any resources if needed
    };
  }, []);

  return <div ref={mapElement} style={{ width: '100%', height: '100%' }} />;
};

const Map = ({ geoJsonVisible }) => (
  <div style={{ flex: 1 }}>
    <MapContainer geoJsonVisible={geoJsonVisible} />
  </div>
);

export default Map;
