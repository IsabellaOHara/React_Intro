import Basket from "./basket";
import myBasket from "./myBasket";

const AddProduct = ({ submitHandler, addItem}) => {

    const productList = [
        {name: "Green sweatshirt", price: '40.00'},
        {name: "Black jeans", price: '70.00'},
        {name: "Red shoes", price: '50.00'},
        {name: "White tshirt", price: '25.00'}
    ]

    return (
        <>
            <form onSubmit={submitHandler}>
                <h5>Green Sweatshirt</h5>
                <h6>40.00</h6>
                <button type="button"
                onClick={addItem}>
                    Add to basket
                    </button>
                <br />
                <h5>Black Jeans</h5>
                <h6>70.00</h6>
                <button type="button"
                onClick={addItem}>
                    Add to basket
                    </button>
                    <br />
                <h5>Red Shoes</h5>
                <h6>50.00</h6>
                <button type="button"
                onClick={addItem}>
                    Add to basket
                    </button>
                    <br />
                <h5>White T-shirt</h5>
                <h6>25.00</h6>
                <button type="button"
                onClick={addItem}>
                    Add to basket
                    </button>
            </form>
    
        </>
    )

}

export default AddProduct;