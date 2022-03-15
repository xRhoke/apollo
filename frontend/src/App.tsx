import React from 'react';
import { CookiesProvider } from 'react-cookie';
import Home from "./Home";
import './App.css';

function App() {
    return (
      <CookiesProvider>
          <Home/>
      </CookiesProvider>
    )
}

export default App;
