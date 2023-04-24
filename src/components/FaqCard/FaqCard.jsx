import './FaqCard.css'

function FaqCard(props) {
    return ( 
        <div className="FaqCard">
            <p className="titulo">
                {props.titulo}
            </p>
            <p className="duvida">
                {props.children}
            </p>
        </div>
     );
}

export default FaqCard;