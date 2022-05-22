import React, { Component } from "react";
import { connect } from 'react-redux'; // we need to destructure bc it's not a default export, it's a multiple export.
import CardList from "../components/CardList"; // .. means leave the current folder and go to the parent folder.
// import {robots} from './robots'; 
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css'; // App is the parent of all our other components.

import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = state => { // these are the standard names. state is the input we receive.
    return { // set searchField to what we receive from searchRobots.searchField, from the store.
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
} // this function says tell me what state i need to listen to and send down as props

const mapDispatchToProps = (dispatch) => { // to send actions
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)), // this is what the prop will be named
                                           // it'll send this as props
        onRequestRobots: () => dispatch(requestRobots()) /* dispatch and call the requestRobots action. since this is 
                                                returning a function instead of just dispatching data, the thunk 
                                                middleware will detect it and act upon it. */
    }                                      
} // dispatch is what triggers the action, it can send actions.


class App extends Component { // this is a smart component, bc it has a state.
    
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() { // this gets run after mounting and also every time there's an update.
        const { searchField, onSearchChange, robots, isPending } = this.props; // this is passed down as props, from the redux store
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        if (isPending) { // if the robots haven't loaded from the api yet, display "loading"
            return <h1>Loading...</h1>
        } else { // we should write this if statement as a ternary, to make the code cleaner.
            return (
                <div className='tc'>
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App); // export as a higher order function, running consecutively. this one means that App is now subscribed to changes in the store, so it'll be notified. it'll be subscribed to the changes in the state parts that we tell it.
// i'm listening to this part of the state and i'm interested in these actions. and then give those props to the App.

// if we wanted to, we could also connect other containers like the ErrorBoundary.js to redux (from their respective file).