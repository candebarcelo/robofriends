import React from 'react'; // to write react
import ReactDOM from 'react-dom'; // connects to the dom, so we can use with the browser. (u could use 
                                  // another for mobile -> react native, vr, etc)
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css'; // the css file, which will apply to the components u render in this file
import reportWebVitals from './reportWebVitals';
import 'tachyons'; // tachyons is a module like bootstrap, which has several pre-made css styles. we can 
                   // add them to our html as classes.
import { searchRobots, requestRobots } from './reducers';
import App from './containers/App'; // if there's no file type, it'll assume it's .js

const logger = createLogger(); // middleware

const rootReducer = combineReducers({ searchRobots, requestRobots }) // combineReducers is used to combine all reducers
                                                              // into one, so that u can use them with createStore.

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)) // create a store from the rootReducer 
                                                                // (or if u had only one reducer you'd use their
                                                                // particular name instead) and then apply middleware, 
                                                                // first using thunkMiddleware, and then the logger from
                                                                // redux-logger.

ReactDOM.render( 
  <React.StrictMode> {/* strict mode renders potential problems in ur code. u can also turn it off by eliminating the line. */}
    <Provider store={store}> {/* the Provider passes down the store to the App and all of its children */}
      <App />
    </Provider> 
  </React.StrictMode>, 
  document.getElementById('root') 
);

reportWebVitals();
