

import { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import './Abaixo.css';

function Abaixo() {
  const [items, setItems] = useState([]);
  const [Total, setTotal] = useState([]);

  useEffect(()=>{
    fetch('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5bbd6fdd-abae-411d-96cc-1a5d76d3803b/abaixo-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210330T024031Z&X-Amz-Expires=86400&X-Amz-Signature=83f431e2ea035f3134099aa66aca3112a12f2c1cd53f0bd4aac4e014743c29c8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22abaixo-10-reais.json%22')
    .then(response => response.json())
    .then((data) => {
      setItems(data.items);
      setTotal(data.totalizers[0])
    })
    .then(()=>{
      const a = document.querySelector('#total');
      const x = a.value.replace(',', '');
      x.split('');
      if(x[3] === " "){
        a.value = `${x[0]}${x[1]},${x[2]}0`
      }
    });
  }, [])
   
  return (
    <div className="Produto">
     <div className="main">
     <div className="header">
        <h2>Meu carrinho</h2>
      </div>
      {items.map(item => (
      <div key={item.id}>
        <div className="item">
          <img src={item.imageUrl} alt="product-img"></img>
          <div className="info">
            <span>{item.name}</span>
            <span>R$<NumberFormat className="teste" value={item.price} format="#,###" /></span>
            <span>R$<NumberFormat className="teste1" value={item.sellingPrice} format="#,###" /></span>
          </div>
        </div>
      </div>
      ))}
      <div className="total">
        <div className="items-total">
          <span>Total</span>
          <span>R$<NumberFormat id="total" className="teste2" value={Total.value} format="##,##" /></span>
        </div>
      </div>
      <div className="footer">
        <button>Finalizar compra</button>
      </div>
     </div>
    </div>
  );
}

export default Abaixo;
