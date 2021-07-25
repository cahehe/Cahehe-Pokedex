import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Section from './Section'
import Stats from './Stats'
import "./PokemonInfo.css"

interface prop{
    name: string;
}

interface linkProp{
    pokemonName: string;
}

interface data{
    [ key : string]: string
}

const PokemonInfo = (prop:prop) => {

    const {pokemonName} = useParams<linkProp>();        
    const[pokedexInfo, setPokedexInfo] = useState([{}])    
    const[abilities, setAbilities] = useState([{}])    
    const[training, setTraining] = useState([{}])    
    const[basicStats, setBasicStats] = useState([{}])    
    const[maxVals, setMaxVals] = useState([{}])    
    const[imageUrl, setImageUrl] = useState<data[]>([{}])    

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

    useEffect(() => {
        fetch(path + `max`)
        .then(response => response.json())
        .then(response => setMaxVals(response))           
        .catch(error => console.log(error))   
    },[path])

    useEffect(() => {
        fetch(path + `images?name=${encodeURIComponent(pokemonName)}`)
        .then(response => response.json())
        .then(response => setImageUrl(response))           
        .catch(error => console.log(error))   
    },[path, pokemonName])

    console.log(imageUrl[0]['link'])
    return(
        <div>
            <h1 id = "title">{pokemonName}</h1>
            <div className = "info">
                <img src = {imageUrl[0]['link']} id = "image" alt = ""/>
                <Section id = "training" data = {training} title = {"Training"}/>
                <div id = "lastColumn">
                    <Section id = "pokedexInfo" data = {pokedexInfo} title = {"Pokedex Info"}/>
                    <Section id = "abilities" data = {abilities} title = {"Abilities"}/>                
                </div>                            
            </div>
            <Stats id = "basicStats" data = {basicStats} title = {"Basic Stats"} max = {maxVals}/>
        </div>
    )
    
}

export default PokemonInfo