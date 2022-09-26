const Hello = props => {
    return (
        <h1>Hello, {props.name}</h1>
    )
}

const PropComp = () => {
    return (
        <>
        <Hello name = "Isabella"/>
        <Hello name = "Eve"/>
        <Hello name = "O'Hara"/>
        </>
    )
}

export default PropComp;