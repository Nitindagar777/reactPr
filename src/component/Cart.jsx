// const Valid = () => (<h1>Yeah it's Valid</h1>);
// const NotValid = () => (<h1>Hell Nooo</h1>);


// const Cart = ({children}) => {
    
//     return <>
//         <h1>{children}</h1>
//         {children ? <Valid/> : <NotValid />}
//     </>
    
// };

// export default Cart;



const Cart = () => {
    const product = ["Apple" , "mango", "banana", "tomato"];

    return (
        <>
            <h1>your Carts List here.</h1>
            {product.length > 0 && <h2>Here is Your {product.length} Order Ready:</h2>}
            <ul>
                {product.map((pro, index) => (
                    <li key={index} >{pro}</li>
                ))}
            </ul>
        </>
    );
}

export default Cart;

