/*
const Button = (props) => {
    return (
        <button style={{color:props.color}}>
            {props.text} - {props.color.toUpperCase()}
        </button>);
}
*/


const Button = ({ text, color, children }) => {
    
    const onClickButton = (e)=>{
        console.log(e);
    };

    return (
        <button 
            onClick={onClickButton}
            // onMouseEnter={onClickButton}
        style={{color:color}}>
            {text} - {color.toUpperCase()}
            {children}
        </button>);
};

Button.defaultProps = {
    color: "black",
};
export default Button;