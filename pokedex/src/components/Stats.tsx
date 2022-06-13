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

    const isNumeric = (key : number | string, val: number | string, max: string | number)  => {            
        let total : number = 0
        let maxVal: number = 0

        //need to typecheck else typescript complains
        if(typeof val === 'number')
            total = val
        
        //need to typecheck else typescript complains
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
            {/* Get all the keys of our data object. That is stored in the first index of data */}
            {Object.keys(prop.data[0]).map((keyName, keyIndex) => {
                //we don't need to print the name. Just everything else.
                if(keyName !== "name") 
                    return(                                       
                        <div >
                            <h3>{keyName}: {prop.data[0][keyName]} </h3>
                            {/* call our helper function */}
                            {isNumeric(keyName, prop.data[0][keyName], prop.max[0][keyName])}                    
                        </div>                            
                    )
                return <div></div>                
            })}
        </div>
    )
}

export default Stats;