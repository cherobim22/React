import {useState, useEffect} from 'react'
import Produtos from './produtos/Produto'
import Abaixo from './abaixo/Abaixo'
import './index.css'
function App() {
 
    return (
      <div className="index">
           <div className="cart">
           <Produtos/>
            <Abaixo/>
           </div>
      </div>
    );
  }
  
  export default App;