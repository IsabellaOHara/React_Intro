import { useState } from 'react';

const Clicker = () => {

    //let count = 0;

    const [count, setCount] = useState(0);

    const AddOne = (e) => {
        setCount(count+1)
        console.log(count)
       // count++
    }
    return (
        <div>
            <p> Count: {count}</p>
            <button onClick={AddOne}>Add One</button>
        </div>
    );

}

export default Clicker;