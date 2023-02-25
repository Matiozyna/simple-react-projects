import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hotels from "./components/Hotels/Hotels";
import LoadingIcon from "./components/UI/LoadingIcon/LoadingIcon"
import Searchbar from "./components/UI/Searchbar/Searchbar"
import {Component} from "react";
import Layout from "./components/Layout/Layout"
import Footer from "./components/Footer/Footer";

class App extends Component {
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
        loading: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hotels: this.hotels})
            this.setState({loading: false})
        }, 1000)
    }

    searchHandler(term) {
        console.log(`szukaj z ${term}`);
        const hotels = [...this.hotels]
            .filter(el => el.name
                .toLowerCase()
                .includes(term.toLowerCase()));
        this.setState({hotels});
    }

    render() {
        return (
            <div className="App">
                <Layout
                    header={
                        <Header>
                            <Searchbar onSearch={term => this.searchHandler(term)}/>
                        </Header>
                    }
                    menu={ <Menu/>}
                    content={this.state.loading ? <LoadingIcon/> : <Hotels hotels={this.state.hotels}/>}
                    footer={<Footer/>}
                />

            </div>
        );
    }
}

export default App;
