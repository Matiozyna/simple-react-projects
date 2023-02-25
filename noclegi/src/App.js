import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hotels from "./components/Hotels/Hotels";
import LoadingIcon from "./components/UI/LoadingIcon/LoadingIcon";
import Searchbar from "./components/UI/Searchbar/Searchbar";
import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import ThemeButton from "./components/UI/ThemeButton/ThemeButton";
import ThemeContext from "./context/themeContext";

class App extends Component {
    static contextType = ThemeContext;

    hotels = [
        {
            id: 1,
            name: "Brylownia",
            city: "Wielgowo",
            rating: -10.0,
            description: "Majonez jest majonezem",
        },
        {
            id: 2,
            name: "BujakTvHotel",
            city: "Kielce",
            rating: 10.0,
            description: "Majonez jest majonezem",
        },
        {
            id: 3,
            name: "Zamek",
            city: "jakis fajny zamek",
            rating: 8.3,
            description: "no jest fajny zamek",
        },
    ];

    state = {
        hotels: [],
        loading: true,
        theme: "danger",
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ hotels: this.hotels });
            this.setState({ loading: false });
        }, 1000);
    }

    searchHandler(term) {
        console.log(`szukaj z ${term}`);
        const hotels = [...this.hotels].filter((el) =>
            el.name.toLowerCase().includes(term.toLowerCase())
        );
        this.setState({ hotels });
    }

    themeHandler = () => {
        this.state.theme === "danger"
            ? this.setState({ theme: "primary" })
            : this.setState({ theme: "danger" });
    };

    render() {
        const header = (
            <Header>
                <Searchbar
                    onSearch={(term) => this.searchHandler(term)}
                    changeTheme={this.themeHandler}
                />
                <ThemeButton changeTheme={this.themeHandler} />;
            </Header>
        );
        const menu = <Menu />;

        const content = this.state.loading ? (
            <LoadingIcon />
        ) : (
            <Hotels hotels={this.state.hotels} />
        );

        const footer = <Footer />;

        return (
            <ThemeContext.Provider value={this.state.theme}>
                <div className="App">
                    <Layout
                        header={header}
                        menu={menu}
                        content={content}
                        footer={footer}
                    />
                </div>
            </ThemeContext.Provider>
        );
    }
}

export default App;
