

import { useEffect, useState } from 'react';
import './Abaixo.css';

function Abaixo() {
  const [items, setItems] = useState([]);

  useEffect(()=>{
 console.log("abaixo")

  fetch('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5bbd6fdd-abae-411d-96cc-1a5d76d3803b/abaixo-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210328T201733Z&X-Amz-Expires=86400&X-Amz-Signature=8f2ece317e078ff3b5bdd47fc0309b3b2e939bbe784bc25851ff64ea48f7b64c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22abaixo-10-reais.json%22')
  .then(response => response.json())
    .then((data) => {
      console.log(data)
      setItems(data.items);
    });
    // .then(()=>{
    //     const prices = document.querySelectorAll('.price');
    //     prices.forEach((e)=>{
    //      const number = e.innerText.toString()
    //      const numberSplit = number.split('')
    
    //       e.innerText = `R$${numberSplit[0]},${numberSplit[1]}${numberSplit[2]}`
    //     })
    //   });


  }, [])
   
 
  return (
    <div className="Abaixo">
     <div>
       <h4>Abaixo</h4>
     </div>

     <div>
     <ul>
        {items.map(item => (
          <li key={item.id}>
            <img src={item.imageUrl} alt="product-img"></img>
            <span className="name">{item.name} </span>
            <span className="price">{item.price} </span>
            <span className="price">{item.sellingPrice}</span>
            {/* <span className="price">R${((item.price/1000)*10).toFixed(2)} </span>
            <span className="price">R${item.sellingPrice*0.01}</span> */}
        
            
          </li>
        ))}
      </ul>
     </div>
 
    </div>
  );
}

export default Abaixo;
