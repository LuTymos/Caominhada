import './DepoimentoCard.css'

import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

function DepoimentoCard(props) {
    return (
        <div className="DepoimentoCard">
            <div className="bloco">
                <div className="foto"><img src={props.img} alt="" /></div>
                <p className="nome">{props.nome}</p>
            </div>
            <div className="depoimento">
                <ImQuotesLeft />
                <p>{props.children}</p>
                <ImQuotesRight />
            </div>
        </div>
    );
}

export default DepoimentoCard;