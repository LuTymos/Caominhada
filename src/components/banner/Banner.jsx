import './Banner.css'
import bg_oculos from './img/bg-oculos.png'


function Banner() {
    return ( 
        <div className="Banner mobile">
            <div className='container'>
            <div>
            <p>Uma passeio tão confiável quanto seu aumigo companheiro!</p>
            <button><a href="">Entrar em contato</a></button>
            </div>
            <img src={bg_oculos} alt="" />
            </div>
        </div>
     );
}

export default Banner;