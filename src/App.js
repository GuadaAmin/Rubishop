import React from 'react';
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/categoria/:categoria" element={<ItemListContainer />}/>
          <Route path="/item/:productId" element={<ItemDetailContainer />}/>
        </Routes>
        <ItemCount nombreProducto="Producto" stock="10" initial="1" />
      </div>
    </BrowserRouter>
  );
}

export default App;
