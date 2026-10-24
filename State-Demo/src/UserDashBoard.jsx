import { useState } from "react"

export const UserDashBoard = ({isPremium}) => {
    
    const [credits , setCredits]  = useState(100)

    
    if(isPremium){
        return <div>Uprade to premium to see credits</div>
    }
    
    return (
        <div>
            <p>You have {credits} credits</p>
            <button onClick={() => setCredits(0)}>Spend all credits</button>
        </div>
    )


}