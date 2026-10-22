export const CustomButton = ({text}) => {
    const name = "Codevolution";

    const handleClick = () => {
        console.log(`Hey ${name}, You clicked ${text}`);
    };

    return <button onClick={handleClick}>{text}</button>;











    // const handleClick = (e) =>{
    //     console.log("Clicked elemnet" ,e.target);
    //     console.log("Click Cordinates",e.clientX,e.clientY);
    //     console.log("Which Mouse Button ?",e.button)
    //     alert("Thanks for Liking")
    // }

    // return <button onClick={handleClick}>Like</button>;

    // return <button onClick={() => alert("Thanks for Liking")}>Like</button>
}