import DepoimentoCard from "./DepoimentosCard/DepoimentoCard";

import './Depoimentos.css'

function Depoimentos() {
    return ( 
        <div className="Depoimentos">
            <DepoimentoCard nome="lucas camilo tymoschenko" >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </DepoimentoCard>
            <DepoimentoCard nome="lucas camilo tymoschenko" >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </DepoimentoCard>
            <DepoimentoCard nome="lucas camilo tymoschenko" >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </DepoimentoCard>
        </div>
     );
}

export default Depoimentos;