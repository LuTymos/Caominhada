import DepoimentoCard from "./DepoimentosCard/DepoimentoCard";

import './Depoimentos.css'

function Depoimentos(props) {

    const peoplesReserva = [{name:{first:'Lucas', last:'Tymoschenko'}, picture:{large:null}},{name:{first:'Lucas', last:'Tymoschenko'}, picture:{large:null}},{name:{first:'Lucas', last:'Tymoschenko'}, picture:{large:null}}]

    const person_1 = props.people[0] || peoplesReserva[0]
    const person_2 = props.people[1] || peoplesReserva[1]
    const person_3 = props.people[2] || peoplesReserva[2]


    return ( 
        <div className="Depoimentos">
            <DepoimentoCard nome={`${person_1.name.first}  ${person_1.name.last}`} img={person_1.picture.large}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </DepoimentoCard>
            <DepoimentoCard nome={`${person_2.name.first}  ${person_2.name.last}`} img={person_2.picture.large} >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </DepoimentoCard>
            <DepoimentoCard nome={`${person_3.name.first}  ${person_3.name.last}`} img={person_3.picture.large}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </DepoimentoCard>
        </div>
     );
}

export default Depoimentos;