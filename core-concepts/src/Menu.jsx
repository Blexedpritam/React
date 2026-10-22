import { MenuItem } from "./MenuItem"

export const Menu = () =>{

    const handleOrder = (ietmName, ietmPrice) =>{
        alert(`You orderd : ${ietmName} for ${ietmPrice}`);
    }

    return (
        <div>
            <h2>Our Menu</h2>
            <MenuItem name="Pizza" price={12} onOrder={handleOrder}/>
            <MenuItem name="Burger" price={14} onOrder={handleOrder}/>
            <MenuItem name="Momos" price={10} onOrder={handleOrder}/>



        </div>
    )
}