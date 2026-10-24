import { useState } from "react"
export const SimpleCounter = () => {
    console.log("SimpleCounter components render");
    const [count , setCount] = useState(0)

    return (
        <div>
            <h2>Count :  {count}</h2>
            <button onClick={() => setCount(count + 1)}>Incremenet</button>
        </div>
    )

}