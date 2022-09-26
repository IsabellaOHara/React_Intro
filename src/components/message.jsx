import PropTypes from 'prop-types';

const Message = props => {

    console.log(props);
    const isGreeting = props.isGreeting;
    const name = props.name;

    if (isGreeting) {
        return (<div>
            <h1>Hello!</h1>
            <h2>{name + "!"}</h2>
        </div>);
        } else {
            return (<div>
                <h1>Goodbye,</h1>
                <h2>{name + "!"}</h2>
            </div>);
        }

}

Message.propTypes = {
    isGreeting: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
}

export default Message;