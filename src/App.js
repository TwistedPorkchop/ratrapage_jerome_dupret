import './App.css';
import React from 'react';
import { FirstGraph } from './pages/page1';

class App extends React.Component {
render()
  {  return (
      <canvas>
        <FirstGraph></FirstGraph>
      </canvas>
    );}
}

export default App;
