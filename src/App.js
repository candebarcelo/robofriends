import logo from './logo.svg'; // spinning logo
import './App.css';
import React, { Component } from 'react'; // add this!!

class App extends React.Component { // this is what appears as a placeholder b4 u start coding ur react 
                                    // website
  render() { // a component should always have a render function, and within in u say what to return.
    return (
      <div className="App"> {/* u use className instead of class bc since we're writing inside a JSX file,
                                class is already a reserved keyword for JS, so we can't use it for HTML. */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            {this.props.greeting} {/* we use our created properties like this. */}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App; // if we want to import it in another file, we need to export it. default means ur 
                    // only exporting one thing.
