
import {useState, useEffect} from 'react'; 
import Table from './table';
//import './table.css';


interface pokeData{
    pokedex_number: number,
    name: string,
    species: string,
    type_1: string,
    type_2: string
}

//interface allPokeData

const Home = () => {
    const [result, setResult] = useState<pokeData[]>([]);

    useEffect(() => {        
        fetch("http://localhost:5000/general")
        .then(response => response.json())
        .then(response => setResult(response))           
        .catch(error => console.log(error))        
    }, [])

    return (<Table className = "Table" result = {result} />)
}

export default Home
