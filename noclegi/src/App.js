import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hotels from "./components/Hotels/Hotels";
import LoadingIcon from "./components/UI/LoadingIcon/LoadingIcon"
import {Component} from "react";

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
            city: "Kurwa przekleta",
            rating: 8.3,
            description: "Zabrala paru ziomow",
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
                <Header onSearch={(term) => this.searchHandler(term)}/>
                <Menu/>
                {this.state.loading ? <LoadingIcon/> : <Hotels hotels={this.state.hotels}/>}

            </div>
        );
    }
}

export default App;
