import {useParams} from 'react-router-dom';

interface prop{
    name: string;
}

interface linkProp{
    pokemonName: string;
}

const PokemonInfo = (prop:prop) => {


    const {pokemonName} = useParams<linkProp>();        

    console.log("pokemonName is " + pokemonName)

    return(
        <div>info about {pokemonName} here</div>
    )
    
}

export default PokemonInfo