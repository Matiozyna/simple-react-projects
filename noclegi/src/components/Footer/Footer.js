import ThemeContext from "../../context/themeContext";

function Footer() {
    return (
        <ThemeContext.Consumer>
            {(value) => {
                return (
                    <footer className={`text-center m-3 text-${value}`}>
                        noclegi 2021
                    </footer>
                );
            }}
        </ThemeContext.Consumer>
    );
}

export default Footer;
