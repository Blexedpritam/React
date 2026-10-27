import { useState } from "react"
export const PreviousStateCounter = () => {
    const [count , setCount] = useState(0)
    console.log("Render Phase : Components rendering with count = " , count);


    const handleClick = () => {
        

        setCount((prev) => {
            console.log("First updated fun : prev count = ", prev);
            return prev+ 1;
        });
        
        setCount((prev =>{
            console.log("Second updated fun : prev count = ", prev);
            return prev + 5;
        }));
        
        setCount((prev) => {
            console.log("Third Updated fun : prev count =", prev);
            return prev + 10;

        });
        
    };

    return (
        <div>
            <h2>Count :  {count}</h2>
            <button onClick={handleClick}>Previous State Counter</button>
        </div>
    )

}