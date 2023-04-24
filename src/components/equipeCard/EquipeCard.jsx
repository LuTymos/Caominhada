
import {RiInstagramFill, RiWhatsappFill, RiLinkedinBoxFill} from 'react-icons/ri'

import './EquipeCard.css'
function EquipeCard(props) {
    return ( 
        <div className="EquipeCard">
            {/* <img src="" className="img-equipe" alt="" /> */}
            <div className="img-equipe"></div>
            <div className="content">
            <div className="pessoa">
            <p className="name">{props.nome}</p>
            <span className="funcao">{props.funcao}</span>
            </div>
            <div className="icons-box">
            <RiInstagramFill className='icons'/>
            <RiLinkedinBoxFill/>
            <RiWhatsappFill/>
            </div>
            </div>
        </div>
     );
}

export default EquipeCard;