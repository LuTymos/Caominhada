import Banner from "../../components/banner/Banner";
import Beneficios from "../../components/beneficios/Beneficios";
import Depoimentos from "../../components/Depoimentos/Depoimentos";
import Header from "../../components/Header/Header";
import Sessao from "../../components/Sessao/Sessao";



function Home() {
    return (
        <div className="Home">
            <Header />

            <Banner />

            <Sessao />
            
            <Beneficios/>

            <Depoimentos/>
        </div>
    );
}

export default Home;