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
    const[pokedexInfo, setPokedexInfo] = useState([{}])    
    const[abilities, setAbilities] = useState([{}])    
    const[training, setTraining] = useState([{}])    
    const[basicStats, setBasicStats] = useState([{}])    

    const path = `http://localhost:5000/`

    useEffect(() => {
        fetch(path + `pokedexInfo?name=${encodeURIComponent(pokemonName)}`)
        .then(response => response.json())
        .then(response => setPokedexInfo(response))           
        .catch(error => console.log(error))   
    },[path, pokemonName])

    useEffect(() => {        
        fetch(path + `abilities?name=${encodeURIComponent(pokemonName)}`)
        .then(response => response.json())
        .then(response => setAbilities(response))           
        .catch(error => console.log(error))   
    },[path,pokemonName])

    useEffect(() => {
        fetch(path + `training?name=${encodeURIComponent(pokemonName)}`)
        .then(response => response.json())
        .then(response => setTraining(response))           
        .catch(error => console.log(error))   
    },[path,pokemonName])

    useEffect(() => {
        fetch(path + `basicStats?name=${encodeURIComponent(pokemonName)}`)
        .then(response => response.json())
        .then(response => setBasicStats(response))           
        .catch(error => console.log(error))   
    },[path,pokemonName])

    return(
        <div>
            <h1>{pokemonName}</h1>
            <Section data = {abilities} title = {"Abilities"}/>
            <Section data = {training} title = {"Training"}/>
            <Section data = {basicStats} title = {"Basic Stats"}/>
            <Section data = {pokedexInfo} title = {"Pokedex Info"}/>
        </div>
    )
    
}

export default PokemonInfo