import './Sessao.css'
import caminhando from './img/caminhando.png'

function Sessao() {
    return ( 
        <div className="Sessao">
            <h2>O que oferecemos?</h2>
            <div className="container">
            <img src={caminhando} alt="" />
            <div className='texto'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugiat sunt corporis sequi dolorem odio ducimus magni cum quibusdam rem aliquam, expedita nam quasi maiores omnis doloremque saepe unde suscipit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, rerum. Voluptas accusantium commodi, corrupti esse officia id animi.</p>
            <button><a href="">Entrar em contato</a></button>
            </div>
            </div>
        </div>
     );
}

export default Sessao;