import './stats.css'

interface data{
     [key: string] : number | string
}

interface props{
    data: data[];
    max: data[];
    id : string;
    title : string
}

const Stats = (prop: props) =>{
    // console.log("max is " + prop.max)
    //console.log(prop.max[0])

    const isNumeric = (key : number | string, val: number | string, max: string | number)  => {            
        let total : number = 0
        let maxVal: number = 0
        if(typeof val === 'number')
            total = val

        if(typeof max === 'number')
            maxVal = max
        
        total = (total / maxVal) * 100
                
        return(
        <div className = "progress">                                            
            <span style = {{width: `${total}%`}}></span>                      
        </div>
        )
        
    }

    return(
        <div id = {prop.id}>
            <h2>{prop.title}</h2>
            {Object.keys(prop.data[0]).map((keyName, keyIndex) => {
                if(keyName !== "name") 
                    return(                                       
                        <div key = {keyName}>
                            <h3>{keyName}: {prop.data[0][keyName]} </h3>
                            {isNumeric(keyName, prop.data[0][keyName], prop.max[0][keyName])}                    
                        </div>                            
                    )
                return <div key = {keyName}></div>                
            })}
            <footer id = "footer">Note: Stats are a percentage of the highest number for that specific attribute.</footer>
        </div>
    )
}

export default Stats;