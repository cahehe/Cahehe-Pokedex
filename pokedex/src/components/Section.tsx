import "./PokemonInfo.css"

interface data{
    [ key : string]: number | string
}

interface propTypes{
    data: data[],
    title: string,
    id: string
}

const Section = (prop: propTypes) =>{
    //console.log(Object.keys(prop.data[0]))
    return(
        <div id = {prop.id}>
            <h2>{prop.title}</h2>
            {Object.keys(prop.data[0]).map((keyName, keyIndex) => (
                <h3>{keyName}: {prop.data[0][keyName]} </h3>
            ))}
        </div>
    )
}

export default Section