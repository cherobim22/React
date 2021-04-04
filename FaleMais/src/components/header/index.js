import './style.css';
import faleMais from '../../utils/img/FaleMais.svg'

function Header(){

    const myFunction = () =>{
        console.log('aahsiuhsa')
        document.querySelector('.planos').scrollIntoView()
    }

    return(
        <header className="header">
            <div className="container">
              <a href="#" className="logo"><img alt="logo" id="logo" src={faleMais}></img></a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu-header">
                    <button><li><a href="#" >Sobre</a></li></button>
                    <button  onClick={myFunction}><li><a href="#plan">Planos</a></li> </button>
                </ul>  
            </div>
            
        </header>
    );
}

export default Header;