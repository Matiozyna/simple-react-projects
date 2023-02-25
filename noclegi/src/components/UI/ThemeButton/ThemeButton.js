function ThemeButton(props) {
    return (
        <button onClick={props.changeTheme} className={`m-2 btn btn-dark`}>
            Dark/Light
        </button>
    );
}

export default ThemeButton;
