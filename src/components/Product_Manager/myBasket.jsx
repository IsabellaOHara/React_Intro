import Basket from "./basket";
import AddProduct from "./product";

const MyBasket = ({basketItem}) => {


    const Display = ({basketItemName}, {basketItemPrice}) => ( <table>
        <tr>
            <td>{basketItemName}</td>
            <td>{basketItemPrice}</td>
        </tr>

    </table>)
        
    return (
        <table className="basketItems">
            <tr>
                <th>Product Name</th>
                <th>Price</th>
            </tr>
            {basketItem.map((basketItemName, basketItemPrice, index) => 
                <Display key={index} basketItemName={basketItemName} basketItemPrice={basketItemPrice}/> )}

        </table>
    )

}

export default MyBasket;