import React, {Component} from "react";
import CardList from "./CardList";
import {robots} from './robots'; // we need to destructure bc it's not a default export, it's a multiple export.
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = { // state = description of ur app. this is what can change. it's usually in the parent component, so it can pass 
                       // the info to the others. =/= props, which come out of state and can't change.
            robots: robots,
            searchfield: '',
        }
    }

    onSearchChange = (event) => { // function we're making up for the search bar
        console.log(event.target.value);
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;