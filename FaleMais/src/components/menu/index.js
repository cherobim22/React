import './style.css'
import iconImg from '../../utils/img/iconFale.svg'
function Menu(){
        return(
            <div className="menu">
             <div className="menu-inside">
                <div className="info">
                    <h1>FaleMais</h1>
                    <span>Aqui você econtra os melhores planos de telefone do mercado.</span>
                    <h3>Sua economia começa aqui !</h3>
                </div>
                <img alt="icon" src={iconImg}></img>
             </div>
            </div>
        );
}

export default Menu;