import PropTypes from 'prop-types';

const ComponentWithProps = props => {
    return (
        <>
        <h1>{props.headerProp}</h1>
        <p>{props.contentProp}</p>
        <p>{props.numberProp} + that's the default number</p>
        <p>{props.nonexistentProp} + that's the default nonexistant prop</p>
        </>
    )
}

ComponentWithProps.defaultProps = {
    headerProp: `This is the default heading`,
    contentProp: `This is default content`,
    numberProp: 18022000,
    nonexistentProp: ""
}

export default ComponentWithProps;