import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import CardList from "../components/CardList"; // .. means leave the current folder and go to the parent folder.
// import {robots} from './robots'; // we need to destructure bc it's not a default export, it's a multiple export.
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css'; // App is the parent of all our other components.

import { setSearchField } from "../actions";

const mapStateToProps = state => { // these are the standard names. state is the input we receive.
    return { // set searchField to what we receive from searchRobots.searchField
        searchField: state.searchRobots.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)) // this is what the prop will be named
    }                                      // it'll send this as props
} // dispatch is what triggers the action, it can send actions.


const App = () => { // this is a smart component, bc it has a state.
    const [robots, setRobots] = useState([]); // array destructuring
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users') // fetch info from an api. u can also use 
                                                            // https://jsonplaceholder.cypress.io/users it's the same
        .then(response => response.json()) // convert it to json
        .then(users => {setRobots(users)}) // each object, make it a robot user in our state.
    }, []);

    
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (!robots.length) { // if the robots haven't loaded from the api yet, display "loading"
        return <h1>Loading...</h1>
    } else { // we should write this if statement as a ternary, to make the code cleaner.
        return (
            <div className='tc'>
                <h1 className="f1">RoboFriends</h1>
                <SearchBox setSearchField={(event) => setSearchField(event.target.value)} />
                <Scroll> {/* re-usable scroll box */}
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/> {/* this is Scroll's child */}
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); // export as a higher order function, running consecutively. this one means that App is now subscribed to changes in the store, so it'll be notified. it'll be subscribed to the changes in the state parts that we tell it.
// i'm listening to this part of the state and i'm interested in these actions. and then give those props to the App.