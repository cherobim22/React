
import { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import './produto.css';



function Produto(props) {

  console.log(props.name);
  const [items, setItems] = useState([]);
  const [Total, setTotal] = useState([]);

  useEffect(()=>{
    fetch('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/11b895d0-bc64-4f3a-bfa9-7c652be8d415/acima-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210330T024044Z&X-Amz-Expires=86400&X-Amz-Signature=6d4c3b9aea44a5ff3b7a06a479685775b745644abd4962b79955d403d86d1572&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22acima-10-reais.json%22')
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      setItems(data.items);
      setTotal(data.totalizers[0])
    }).then(()=>{
      const a = document.querySelectorAll('.teste1');
      a.forEach(elem => {
        const x = elem.value.replace(',', '');
        x.split('');
        if(x[0] === '9'){
          console.log(elem.value)
          elem.value = `0,${x[0]}${x[1]}`
        }   
      })
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
        <div className="total-items">
          <span>Total</span>
          <span>R$<NumberFormat className="teste2" value={Total.value} format="##,##" /></span>
        </div>
        <h4>Parabéns, sua compra tem frete grátis!</h4>
      </div>

      <div className="footer">
        <button>Finalizar compra</button>
      </div>
    </div>
 
    </div>
  );
}

export default Produto;
