
import './App.css';
import Header from './components/header'
import Menu from './components/menu'
import Calculador from './components/calculador'
import Planos from './components/planos'
import Footer from './components/footer'

function App() {
 

  return (
    <div className="App">
      <Header></Header>
      <Menu></Menu>
      <Calculador></Calculador>
      <Planos></Planos>
      <Footer></Footer>
    </div>
  );
}

export default App;
