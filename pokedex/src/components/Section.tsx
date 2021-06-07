interface data{
    [ key : string]: number | string
}

interface propTypes{
    data: data[]
}

const Section = (prop: propTypes) =>{
    console.log(Object.keys(prop.data[0]))
    return(
        <div>
            {Object.keys(prop.data[0]).map((keyName, keyIndex) => (
                <h1>{keyName}: {prop.data[0][keyName]} </h1>
            ))}
        </div>
    )
}

export default Section