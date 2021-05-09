import React from 'react';
import Cell from './cell';

const Row = () => {
    let firstColumn : string[] = ["first","second","third","fourth"]

    return firstColumn.map((val:string) => {
        return (<>(<Cell cellName = {val}/>)</>)
    })

    

    //return <Cell cellName = {"val"}/>
}

export default Row;