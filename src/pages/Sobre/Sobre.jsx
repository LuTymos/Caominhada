import EquipeCard from '../../components/equipeCard/EquipeCard';
import Equipe from './img/Team-work-bro.svg'
import "./Sobre.css"
import {RiInstagramFill, RiWhatsappFill} from 'react-icons/ri'


function Sobre() {
    return ( 
        <div className="Sobre">
            <section className="empresa container">
                <img src={Equipe} alt="" />
                <div className="bloco">
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum.</p>
                <div className='icons'><RiInstagramFill className='icon'/>
                <RiWhatsappFill className='icon'/></div>
                </div>
            </section>


            <section className='equipe'>
                <h3>Nossa Equipe:</h3>
                <div className="container">
                <EquipeCard nome='Lucas Camilo' funcao='Passeador'/>
                <EquipeCard nome='Douglas Carvalho' funcao='Passeador'/>
                <EquipeCard nome='Yasmin Rodrigues' funcao='Atendente'/>
                <EquipeCard nome='Marcello Ladislau' funcao='Atendente'/>
                <EquipeCard nome='Yasmin Moura' funcao='Passeadora'/>
                </div>
            </section>
        </div>
     );
}

export default Sobre
