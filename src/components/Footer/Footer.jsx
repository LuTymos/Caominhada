import './Footer.css'

import {FaWhatsappSquare, FaInstagramSquare} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

import maps from './img/mapa.jpg'

function Footer() {
    return ( 
        <footer className="footer">
            <div className="localizacao">
            <img src={maps} alt="" />
            <p>Barueri, SP</p>
            </div>

            <div className="contatos">
                <h3>Contatos:</h3>
            <div className="contato"><FaWhatsappSquare className='i'/> <p>(11)97828-1477</p></div>
            <div className="contato"><FaInstagramSquare className='i'/> <p>@caominhada</p></div>
            {/* <div className="contato"><MdEmail className='i'/> <p>caominhada@gmail.com</p></div> */}
            </div>

        </footer>
     );
}

export default Footer;