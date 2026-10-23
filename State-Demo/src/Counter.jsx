export const Counter = () =>{

    let count = 0;

    const handleClick = () => {
        count = count + 1;
        console.log("Counter Component rendered");
    }

    return (
        <>
            <button onClick={handleClick}>Count : 0</button>
        </>
    )
}