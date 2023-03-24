import './CardBeneficio.css'

function CardBeneficios(props) {
    return ( 
        <div className="CardBeneficios">
            {/* <div className="img"><img src={`./img/${props.img}`} alt="" /></div> */}
            <div className="img"><img src={`src/components/CArdBeneficio/img/${props.img}.png`} alt="" /></div>
            <div className="infos">
            <h3>{props.title}</h3>
            <p>{props.children}</p>
            </div>
        </div>
     );
}

export default CardBeneficios;