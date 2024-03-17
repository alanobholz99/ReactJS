import React from 'react';
import { useState } from 'react';


const useCounter = (value = 0,maxValue = 1, step = 1 ) => {
    const [count, setCount] = useState(minValue)
    
const increment = () =>{
    if (count + step <= maxValue)
setCount(count + step)
}
const decrement = () => {
    if (count - step >= 1){
        setCount(count - step)
    }
    
}
const reset = () =>{
    setCount(1)
}


    return {count, increment, decrement, reset}
       
    
}

export default useCounter;
