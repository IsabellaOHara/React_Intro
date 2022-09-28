import { useState } from 'react';
const Car = () => {

    const [brand, setBrand] = useState('Mini');
    const [model, setModel] = useState('Cooper');
    const [colour, setColour] = useState('Red');
    const [year, setYear] = useState(2020);

    return (
        <>
        <h3>This is my car:</h3>
        <p>Brand: {brand}</p>
        <p>Model: {model}</p>
        <p>Colour: {colour}</p>
        <p>Year: {year}</p>
        <form>
            <label for="brand">Brand:</label>
            <input type="text"
            name="brand"
            value={brand}
            onChange={e => setBrand(e.target.value)}></input>
            <br />
            <label for="model">Model:</label>
            <input type="text"
            name="model"
            value={model}
            onChange={e => setModel(e.target.value)}></input>
            <br />
            <label for="colour">Colour:</label>
            <input type="text"
            name="colour"
            value={colour}
            onChange={e => setColour(e.target.value)}></input>
            <br />
            <label for="year">Year:</label>
            <input type="number"
            name="year"
            value={year}
            onChange={e => setYear(e.target.value)}></input>
            <br />
            <button>Submit</button>
        </form>
        </>
    )
}

export default Car;