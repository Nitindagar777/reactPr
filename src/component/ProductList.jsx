function ProductList(){

    const Products = [
        {id : 1, name : "Mobile", price : "$100"},
        {id : 2, name : "Laptop", price : "$500"},
        {id : 3, name : "Tablet", price : "$300"}
    ];


    return(
        <>
            {Products.map((product) => (
                <div keys = {Math.random()}>
                    <h2>{product.id}</h2>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                </div>
            ))}
        </>
    );

}

export default ProductList;