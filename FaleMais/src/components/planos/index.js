import './style.css';

function Planos(){
    return(
        <div id="plan" className="planos">
            <h1>Planos</h1>
            <div className="menu-planos">
                <div className="planos-info">
                    <span>Fale Mais 30</span>
                    <small>Com esse plano você faz ligações para qualquer lugar e os primeiros 30 minutos são de graça!</small>
                    <a>Saber Mais</a>
                </div>
                <div className="planos-info">
                    <span>Fale Mais 60</span>
                    <small>Com esse plano você faz ligações para qualquer lugar e os primeiros 60 minutos são de graça!</small>
                    <a>Saber Mais</a>
                </div>
                <div className="planos-info">
                    <span>Fale Mais 120</span>
                    <small>Com esse plano você faz ligações para qualquer lugar e os primeiros 120 minutos são de graça!</small>
                    <a>Saber Mais</a>
                </div>
            </div>

        </div>
    );
}

export default Planos;