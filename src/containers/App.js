import React, {Component} from "react";
import CardList from "../components/CardList"; // .. means leave the current folder and go to the parent folder.
// import {robots} from './robots'; // we need to destructure bc it's not a default export, it's a multiple export.
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css'; // App is the parent of all our other components.

class App extends Component { // this is a smart component, bc it has a state.
    constructor() {
        super()
        this.state = { // state = description of ur app. this is what can change. it's usually in the parent component, so it can pass 
                       // the info to its children, as props. =/= props, which come out of state and can't change. 
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') // fetch info from an api. u can also use 
                                                            // https://jsonplaceholder.cypress.io/users it's the same
        .then(response => response.json()) // convert it to json
        .then(users => {this.setState({ robots: users })}) // each object, make it a robot user in our state.
    }

    onSearchChange = (event) => { // function we're making up for the search bar
        this.setState({ searchfield: event.target.value });
    }

    render() { // this gets run after mounting and also every time there's an update.
        const { robots, searchfield } = this.state // destructuring
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        if (!robots.length) { // if the robots haven't loaded from the api yet, display "loading"
            return <h1>Loading...</h1>
        } else { // we should write this if statement as a ternary, to make the code cleaner.
            return (
                <div className='tc'>
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll> {/* re-usable scroll box */}
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/> {/* this is Scroll's child */}
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;