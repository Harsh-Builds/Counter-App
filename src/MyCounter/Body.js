
import React, { useState } from "react";
import "./count.css"

const Body = () => {

let upperLimit = 20;
let lowerLimit = -10;

const [count, setCount] = useState([0]);   
const [Step, setStep] = useState(1);
const [allowNeg, setallowNeg] = useState(true)


const incrementBtn = () => setCount((c) => parseInt(c + Step));
const decrementBtn = () => setCount((c) => parseInt(c - Step));
const resetBtn = () => setCount((c) => parseInt(c = 0));

const allowNegative = (e) => {
   setallowNeg(e.target.checked);
}



const stepChange = (event) => {

  setStep(Number(event.target.value));
 };
// main bg-purple-500


  return (
  
  
  <div className="container">
    <h1 className="font-bold"> Counter App</h1>
    <span id="owner">By Harsh</span>
    <div  className="main">
      
      <div className="display" id="counterValue">{count}</div>
      <div className="controls">
        <button onClick={decrementBtn} disabled={!allowNeg && count<= 0 || count <= lowerLimit} >-</button>
        <button onClick={resetBtn}>Reset</button>
        <button onClick={incrementBtn}  disabled = {count >= upperLimit} >+</button>
      </div>

      <div className="settings">
        <label>
          Step Size: 
          <input type="number" id="stepSize" value={Step}  onChange={stepChange} />
        </label>
      
  
       <label>
         <input type="checkbox"  checked={allowNeg} className="toggle toggle-success"  onChange={allowNegative}/>
          <span className="switch-text">Allow Negative</span>
        </label> 
        </div>
      </div>
    </div>

 
   


  )
}
export default Body