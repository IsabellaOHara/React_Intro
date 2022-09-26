
const Element = () => {

    const isGreeting = true;

    const lisht = [2, 3, 4, 5, 6, 7]

    const nameGen = () => {
        const first = "Bella";
        const last = "O'Hara";
        return `${first} ${last}`
    }

    const name = "Bella"


    if (isGreeting) {
    return (<div>
        <h1>Hello!</h1>
        <h2>{name + "!"}</h2>
        <h3>{nameGen()}</h3>
        {lisht.map( (value, index) => {
            return <p key ={index}>{value}</p>
        })}
    </div>);
    } else {
        return (<div>
            <h1>Goodbye,</h1>
            <h2>{name + "!"}</h2>
            <h3>{nameGen()}</h3>
        </div>);
    }
}

export default Element;
