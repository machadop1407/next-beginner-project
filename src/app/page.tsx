"use client"
import {useState, FormEvent } from 'react'; 
export default function Home() {
    const [inputVal, setInputVal] = useState("");
    const handlesubmit = (event: FormEvent) => {
     
        
    };
    return ( 
    <div>
       <div>
        <h1>Enter Your Name </h1>
       </div>
       <form onsubmit={handlesubmit}> 
         <input 
           type="text" 
           placeholder="Enter Your Name.."  
           onChange={(e) => setInputVal(e.target.value)}
           />
         <button type="submit"> Predict Data </button>
       </form>
    </div>
    );
    
  }
