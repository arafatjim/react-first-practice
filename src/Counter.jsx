import { useState } from "react"

export default function Counter(){
          const [count, setCount] =  useState(0);
          const handleAdd = () =>{
                    const newCount = count + 1;
                    setCount(newCount);
          }
          const handleReduce = () =>{
                    const newCount= count - 1;
                    setCount(newCount);
          }
          return (
                    <div style={{border:'10px solid red'}}>
                              <h2>Counter:{count}</h2>
                              <button style={{backgroundColor:'blue', color:'white'}} onClick={handleAdd}>Add</button>
                         <button onClick={handleReduce}>Reduce</button>     
                    </div>
          )
}
