import './style.css'
import Select from '../select';
import calcula from '../../utils/calc.js'
import {useState} from 'react';



function Calculador(){

    const [ComPlano, setComPlano] = useState(['00.00']);
    const [SemPlano, setSemPlano] = useState(['00.00']);
  
    const calc = async () => {
      const [origem, destino] = document.querySelectorAll('.select > select');
      const planos = document.getElementById('planos');
      const pl = planos.options[planos.selectedIndex];
      const ori = origem.options[origem.selectedIndex];
      const dest = destino.options[destino.selectedIndex];
      const min = document.getElementById('min')
  
  
      if(min.value === "" ){
        return '';
      }
  
      const a = await calcula(ori.value, dest.value, pl.value, min.value);
      console.log(a);
  
      setComPlano(a.com_plano);
      setSemPlano(a.sem_plano);
    };

    return(
        <div className="calculador">
            <h3>Calcule o valor de cada ligação e conheça nossos planos.</h3>
            <div className="main">
                <div className="item">
                    <label>Origem</label>
                    <Select />
                </div>  
                <div className="item">
                    <label>Destino</label>
                    <Select />
                </div>  
                <div className="item">
                    <label>Planos</label>
                    <select id="planos">
                        <option value="30">FaleMais 30</option>
                        <option value="60">FaleMais 60</option>
                        <option value="120">FaleMais 120</option>
                    </select>
                </div>
                <div className="item">
                    <label>Minutos</label>
                    <input type="number"  id="min" placeholder="55.." ></input>
                </div>

                <button onClick={calc}>CALCULAR</button>

                <div className="item">
                    <label>Com plano</label>
                    <span>R$ {ComPlano}</span>
                </div>
                <div className="item">
                    <label>Sem plano</label>
                    <span>R$ {SemPlano}</span>
                </div> 
            </div> 

        </div>
    );

}


export default Calculador;