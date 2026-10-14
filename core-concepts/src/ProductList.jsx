import React from "react";
export const ProductList = () =>{
    const names = ["Bruce","Clark","Diana"];

    const products = [
        {
            id:1,
            name:"Laptop",
            price:999,
        },
        {
          id:2,
          name:"Phone",
          price:699,  
        },
        {
            id:3,
            name:"Tablet",
            price:499,
        },
        {
            id:4,
            name:"Watch",
            price: 299,
        }];


        const productElements =  products.filter((product) =>{return product.price > 500;})
        .map((product) => {
                return (
                    <React.Fragment key={product.id}>
                    <div key ={product.id}>
                        <h3>{product.name}</h3>
                        <p>Price : ${product.price}</p>
                    </div>
                    </React.Fragment>
                )
            })

    return <div>
        <h2>Our Prooducts</h2>
        {productElements}
    </div>
}