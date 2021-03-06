import React from 'react'; // to write react
import ReactDOM from 'react-dom'; // connects to the dom, so we can use with the browser. (u could use 
                                  // another for mobile -> react native, vr, etc)
import './index.css'; // the css file, which will apply to the components u render in this file
import reportWebVitals from './reportWebVitals';
import 'tachyons'; // tachyons is a module like bootstrap, which has several pre-made css styles. we can 
                   // add them to our html as classes.
import App from './containers/App'; // if there's no file type, it'll assume it's .js

ReactDOM.render( // render: display this on the app. we can write in html in there, or create our own 
                 // html-like language using JSX
  <React.StrictMode> {/* strict mode renders potential problems in ur code. u can also turn it off by eliminating the line. */}
    <App />
  </React.StrictMode>,
  document.getElementById('root') // put it in here, this part of the html. when this root div gets replaced with our app, it's 
                                  // called "mounting". =/= updating when we get new info and need to update some part of our app, 
                                  // =/= dismounting when a component is eliminated. these are the 3 types of lifecycle hooks which we
                                  // can include in our components. they are triggered automatically, we don't need to call them. for 
                                  // example, constructor(), render(), etc. they get called in a certain order.
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
