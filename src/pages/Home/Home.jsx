import { useEffect } from "react";
import { useState } from "react";
import Banner from "../../components/banner/Banner";
import Beneficios from "../../components/beneficios/Beneficios";
import Depoimentos from "../../components/Depoimentos/Depoimentos";
import Sessao from "../../components/Sessao/Sessao";

const url = 'https://randomuser.me/api/?nat=br&results=3&inc=name,picture'

function Home() {

    const [people, setPeople] = useState([])

    const fetchUser = async() =>{
        const resp = await fetch(url)
        const people = await resp.json()
        setPeople(people.results)
    }

    useEffect(()=>{
        fetchUser()
    }, [])

    
    return (
        <div className="Home">

            <Banner />

            <Sessao />
            
            <Beneficios/>

            <Depoimentos people={people}/>

        </div>
    );
}

export default Home;