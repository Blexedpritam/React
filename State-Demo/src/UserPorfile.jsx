import { useState } from "react"

export const UserProfile = () =>{
    const [user, setUser] = useState({
        name:"Pritam Kuamr",
        age:20,
        email : "batman@leguageoffical",
        address: {
            city:"Patna",
            country:"India",
        }
    })

    console.log("Componet rendering , user :" , user);

    const updateName = () =>{
        setUser({
            ...user,
            name:"Priyanshu Kumar",
        });
    };

    const updateAge = () =>{
        setUser({
            ...user,
            age : user.age + 1,
        })
    };

    const updateMultiple = () =>{
        setUser({
            ...user,
            name:"Sumit Kumar",
            age : 22,
        })
    };

    const updateCity = () =>{
        setUser({
            ...user,
            address:{
                ...user.address,
                city:"Manpur Bairiya Patna - 7",
            },

        })
    }
    


    return(
        <div> 
            <h2>{user.name}</h2>
            <p>Age : {user.age}</p>
            <p>Email :{user.email}</p>
            <p>City : {user.address.city}</p>
            <p>Country : {user.address.country}</p>
            <button onClick={updateName}>Change name to Clark Kent</button>
            <button onClick={updateAge}>Increase age by 1</button>
            <button onClick={updateMultiple}>Update Name and Age</button>
            <button onClick={updateCity}>Move to Manpur Bairiya</button>
         </div>
    )
}