import { useState } from 'react';
import AddProduct from './product';
import MyBasket from './myBasket';

const Basket = () => {

    const productList = [
        {name: "Green sweatshirt", price: '40.00'},
        {name: "Black jeans", price: '70.00'},
        {name: "Red shoes", price: '50.00'},
        {name: "White tshirt", price: '25.00'}
    ]

    const [basketItem, setBasketItem] = useState([]);
    const [basketItemName, setBasketItemName] = useState('');
    const [basketItemPrice, setBasketItemPrice] = useState('');

    const newBasketItem = ({target}) => {
        setBasketItem(target.value)
    }

    const submitItem = (e) => {
        e.preventDefault();
    }

    const addItem = () => {
        setBasketItem(basketItems => [...basketItem, basketItemName, basketItemPrice]);
    }

    return (
        <>
        <AddProduct submitHandler={submitItem} newBasketItem={newBasketItem} addItem={addItem} />
        <MyBasket basketItem={basketItem}/>
        </>
    )
}

export default Basket;