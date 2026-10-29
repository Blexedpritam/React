import { useState } from "react";

export const ShoppingCard = () =>{
    
    const [cardItems, setCardItems] = useState({
        reactCourse : 0,
        vueCourse : 0,
    });

    const prices = {
        reactCourse: 49.99,
        vueCourse: 40.99,
    };

    const handleAddReactCourse = () =>{
        if(cardItems.reactCourse < 5){
            setCardItems({
            ...cardItems,
            reactCourse: cardItems.reactCourse + 1,
            });
        }
        
    };

    const handleAddVueCourse = () =>{
        setCardItems({
            ...cardItems,
            vueCourse: cardItems.vueCourse + 1,
        });
    };

    const clearCart = () =>{
        setCardItems({
            reactCourse: 0,
            vueCourse:0,
        });
    };

    return(
        <div>
            <h2>Shopping cart components</h2>
            <ProductCard
                name="React Course"
                price={prices.reactCourse}
                quantity={cardItems.reactCourse}
                onAddToCard={handleAddReactCourse}
            />
            <ProductCard
                name="Vue Course"
                price={prices.vueCourse}
                quantity={cardItems.vueCourse}
                onAddToCard={handleAddVueCourse}
            />
            <CartSummary 
                cardItems={cardItems} 
                prices={prices}
            />
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

export const ProductCard = ({name , price , quantity , onAddToCard}) =>{
    

    return( 
       <div>
        <h3>{name}</h3>
        <p>${price}</p>
        <p>Quantity : {quantity}</p>
        <button onClick={onAddToCard}>Add to card</button>
       </div>
    );
};


export const CartSummary = ({cardItems , prices}) => {

    const totalItems = cardItems.reactCourse + cardItems.reactCourse;

    const totalPrice = cardItems.reactCourse + prices.reactCourse + cardItems.vueCourse * cardItems.vueCourse;


    return (
        <div>
            <h3>Cart Summary</h3>
            <p>Total items : {totalItems} </p>
            <p>Total Price : ${totalPrice.toFixed(2)}</p>
        </div>
    );
};