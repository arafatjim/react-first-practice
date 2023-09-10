
import './App.css'
import Friends from './Friends';
import Team from './Team';
import Counter from './counter';
import Users from './users';

function App() {
  function handleClick(){
    alert('button-clicked');
  }
const handleClick2 = () =>{
  alert('button clicked 02')
}
const addToFive = (num) =>{
  alert(num + 5);
}
  return (
    <>
    <Friends></Friends>
       <Users></Users>
      <h3>React Core Concept Part 02</h3>
      <Counter></Counter>
      <Team></Team>
     
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {alert('third clicked')}}>Clicked 03</button>
      <button onClick={() => addToFive(9)}>Add Five</button>
    </>
  )
}

export default App
