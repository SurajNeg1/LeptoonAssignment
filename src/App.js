import React from 'react';
import LayersPanel from './components/LayerPanel';
import Map from './components/Map';

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <LayersPanel />
      <Map />
    </div>
  );
}

export default App;