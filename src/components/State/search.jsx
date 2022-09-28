import { useState } from 'react';

const Products = [
    {name: "Green jumper", price: 40.00}, 
    {name: "Pink trousers", price: 70.00}, 
    {name: "Yellow Tshirt", price: 25.00}
]

const ProductTable = () => {

    
    const [output, setOutput] = useState(Products)

   

    
    // const productSearch = ({product}) => {
    //     const searchedProduct = products.filter({product})
    //     const output = setProducts(searchedProduct);
    //     return output;
    // }

    const ProductFilter = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setOutput(Products.filter( (product) => (product.name.toLowerCase().startsWith(e.target.value.toLowerCase()))));
    }


    return (
        <div>
            <label>Search:</label>
            <input onChange={ProductFilter}></input>
            <ul>
                {output.map((product, index) => <li key={index}>{product.name}, {product.price}</li>)}
            </ul>
       
        </div>
    )

}

export default ProductTable;