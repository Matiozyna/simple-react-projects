
const buttonStyles = {
    color: "black",
    backgroundColor: "white",
    border: "none",
    outline: "none",
    width: "100%",
    height: "100%",
    cursor: "pointer"
}

function ThemeButton(props){
    return(
        <button onClick={props.changeTheme} style={buttonStyles}>Zmień kolor</button>
    )
}

export default ThemeButton;