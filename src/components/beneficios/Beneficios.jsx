import './Beneficios.css'


import CardBeneficios from "../CArdBeneficio/CardBeneficio";


function Beneficios() {
    return (
        <div className="Beneficios">
            <CardBeneficios img="andando" title="Exclusividade">Os passeios são exclusivos, ou seja, a atenção é unicamente para seu pet!</CardBeneficios>
            <CardBeneficios img="certificado" title="Cuidados extras">Os passeios são exclusivos, ou seja, a atenção é unicamente para seu pet!</CardBeneficios>
            <CardBeneficios img="extra" title="Equipe Qualificada">Os passeios são exclusivos, ou seja, a atenção é unicamente para seu pet!</CardBeneficios>
        </div>
    );
}

export default Beneficios;