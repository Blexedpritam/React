import { useState } from "react";

export const Counter = () =>{

    const [count, setCount] = useState( () =>{
        console.log("Initial state function called");
        return 0;
    })
    //currentValue , setterFunction = useState(Intial value of our state,function)

    console.log("Counter Components Rendered with count :" , count);

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <>
            <button onClick={handleClick}>Count : {count}</button>
        </>
    )
}