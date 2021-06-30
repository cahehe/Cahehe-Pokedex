import './stats.css'

interface data{
     [key: string] : number | string
}

interface props{
    data: data[];
    id : string;
    title : string
}

const Stats = (prop: props) =>{

    const isNumeric = (key : number | string, val: number | string)  => {            
        if(key === 'name'){
            return
        }
        // if(key === 'total_points')
        //     return(

        //     )

        let total : number = 0
        if(typeof val === 'number')
            total = val

        if(key === 'total_points')
            total = (total / 600) * 100
        
        console.log("total is " + total)
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
                        <div >
                            <h3>{keyName}: {prop.data[0][keyName]} </h3>
                            {isNumeric(keyName, prop.data[0][keyName])}                    
                        </div>                            
                    )
                return <div></div>                
            })}
        </div>
    )
}

export default Stats;