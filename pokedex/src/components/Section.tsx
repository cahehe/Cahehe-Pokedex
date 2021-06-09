interface data{
    [ key : string]: number | string
}

interface propTypes{
    data: data[],
    title: string
}

const Section = (prop: propTypes) =>{
    //console.log(Object.keys(prop.data[0]))
    return(
        <div>
            <h2>{prop.title}</h2>
            {Object.keys(prop.data[0]).map((keyName, keyIndex) => (
                <h3>{keyName}: {prop.data[0][keyName]} </h3>
            ))}
        </div>
    )
}

export default Section