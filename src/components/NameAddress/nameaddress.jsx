import './nameaddress.css'

const NameAddress = () => {

    const nameGenerator = () => {
        const first = "Bella";
        const last = "O'Hara";
        return `${first} ${last}`;
    }

    const addressGen = () => {
        const houseNo = "1";
        const streetName = "Bella Street";
        const city = "Bella Land";
        const postcode = "BE1 1AA";
        return `${houseNo} \n ${streetName}, \n ${city}, \n ${postcode}`;
    }

    return (
        <div>
            <h1 className="NameAddress">{nameGenerator()}</h1>
            <p className="NameAddress">{addressGen()}</p>
        </div>);

}

export default NameAddress;