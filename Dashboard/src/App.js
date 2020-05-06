import React from 'react';
import './App.css';
import MenuSuperior from './component/MenuSuperior/MenuSuperior';
import Resumo from './component/Resumo/Resumo';
import Consultas from './component/Consultas/Consultas';
import Faturamento from './component/Faturamento/Faturamento';
import {Switch, Route} from 'react-router-dom';



function App() {
  return (
    <div>
      <MenuSuperior/>
        <div className="container-gluid">
          <div className="row">
            <div className="col">
              <Switch>
                <Route path="/" exact component= {Resumo}/>                             
                <Route path="/consultas" component={Consultas} />
                <Route path="/faturamento" component={Faturamento} />
              </Switch>
            </div>
          </div>
        </div>

    </div>
  );
}

export default App;
