import FaqCard from '../../components/FaqCard/FaqCard';
import './Faq.css'

function faq() {
    return ( 
        <div className="FAQ">
                <h3>Perguntas frequentes</h3>
           
                
            <div className="container">
                <FaqCard titulo='Qual a duração dos passeios?'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quo exercitationem accusantium iure. Consequuntur quae assumenda consectetur. Odit, quis aperiam vitae, quas amet nisi laborum neque quod delectus esse ipsam.
                </FaqCard>
                <FaqCard titulo='Qual a duração dos passeios?'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quo exercitationem accusantium iure. Consequuntur quae assumenda consectetur. Odit, quis aperiam vitae, quas amet nisi laborum neque quod delectus esse ipsam.
                </FaqCard>
                <FaqCard titulo='Qual a duração dos passeios?'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quo exercitationem accusantium iure. Consequuntur quae assumenda consectetur. Odit, quis aperiam vitae, quas amet nisi laborum neque quod delectus esse ipsam.
                </FaqCard>
                <FaqCard titulo='Qual a duração dos passeios?'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quo exercitationem accusantium iure. Consequuntur quae assumenda consectetur. Odit, quis aperiam vitae, quas amet nisi laborum neque quod delectus esse ipsam.
                </FaqCard>
                
            </div>
            <a href="#"> Não encontrou sua resposta?</a>
        </div>
     );
}

export default faq;