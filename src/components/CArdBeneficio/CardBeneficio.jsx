import './CardBeneficio.css'
import andando from './img/andando.png'
import certificado from './img/certificado.png'
import extra from './img/extra.png'

function CardBeneficios(props) {

   

   if(props.img == 'andando'){
    var imagem = andando
   }else if(props.img == 'certificado'){
    var imagem = certificado
   }else{
    var imagem = extra
   }

    return ( 
        <div className="CardBeneficios">
            <div className="img"><img src={imagem} alt="" /></div>
            {/* <div className="img"><img src={`src/components/CArdBeneficio/img/${props.img}.png`} alt="" /></div> */}
            <div className="infos">
            <h3>{props.title}</h3>
            <p>{props.children}</p>
            </div>
        </div>
     );
}

export default CardBeneficios;