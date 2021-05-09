import React, { ReactElement, useState, useEffect } from 'react';
import Row from './components/row';
import Cell from './components/cell';

interface forTest{
  hola : string;
}

//function test({hola} : {hola : string;}){
// function test(hola : string){
//   return <h1>mi amor {hola}</h1>
// }

const Test = ({hola} : {hola : string;}) => {
  return (<h1>mi amor {hola}</h1>);
}

function App() {
  
  const [count, setCount] = useState(0);

  function increment(){
    setCount(count + 1);
  }

  function decrement(){
    setCount(count - 1)
  }

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  let firstColumn : string[] = ["first","second","third","fourth"]

  return (
    <div className="App">      
      <div > {firstColumn.map((val:string) => {
        return <Cell cellName = {val}/>
    })}
      </div>
    </div>
  );
}

export default App;
