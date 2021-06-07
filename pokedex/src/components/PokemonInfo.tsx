import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Section from './Section'

interface prop{
    name: string;
}

interface linkProp{
    pokemonName: string;
}

const PokemonInfo = (prop:prop) => {

    const {pokemonName} = useParams<linkProp>();    
    const[pokedexInfo, setPokedexInfo] = useState({})    
    const[abilities, setAbilities] = useState([{}])    
    const[training, setTraining] = useState({})    
    const[basicStats, setBasicStats] = useState({})    

    useEffect(() => {
        fetch("http://localhost:5000/pokedexinfo")
        .then(response => response.json())
        .then(response => setPokedexInfo(response))           
        .catch(error => console.log(error))   
    },[])

    useEffect(() => {
        fetch("http://localhost:5000/abilities")
        .then(response => response.json())
        .then(response => setAbilities(response))           
        .catch(error => console.log(error))   
    },[])

    // useEffect(() => {
    //     fetch("http://localhost:5000/training")
    //     .then(response => response.json())
    //     .then(response => setTraining(response))           
    //     .catch(error => console.log(error))   
    // },[])

    // useEffect(() => {
    //     fetch("http://localhost:5000/basicstats")
    //     .then(response => response.json())
    //     .then(response => setBasicStats(response))           
    //     .catch(error => console.log(error))   
    // },[])

    return(
        <div>
            <h1>info about {pokemonName} hereeeeee</h1>
            <Section data = {abilities}/>
        </div>
    )
    
}

export default PokemonInfo