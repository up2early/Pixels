import React from 'react';
import { PixelsDisplay } from './pages/PixelsDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <PixelsDisplay pixels={["#ff0000", "#00ff00"]}/>
    </div>
  );
}

export default App;
