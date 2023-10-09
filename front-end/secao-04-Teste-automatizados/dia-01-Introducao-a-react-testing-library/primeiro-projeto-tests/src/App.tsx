import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// src/App.tsx
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
        <input id="id-email" type="email" />
      </label>
      <input data-testid="id-send" type="button" value="Enviar" />
      <input type="button" value="Voltar" />
    </div>
  );
}

export default App;
