import React from 'react'; // to write react
import ReactDOM from 'react-dom'; // connects to the dom, so we can use with the browser. (u could use 
                                  // another for mobile -> react native, vr, etc)
import './index.css'; // the css file, which will apply to the components u render in this file
import App from './App'; // if there's no file type, it'll assume it's .js
import reportWebVitals from './reportWebVitals';
import 'tachyons'; // tachyons is a module like bootstrap, which has several pre-made css styles. we can 
                   // add them to our html as classes.

ReactDOM.render( // render: display this on the app. we can write in html in there, or create our own 
                 // html-like language using JSX
  <React.StrictMode>
    <App greeting = {"Hello" + "React Ninja"}/> {/* we can add properties inside this tag, like greeting, 
                                                   for example. u write it like a JS expression, between {} */}
  </React.StrictMode>,
  document.getElementById('root') // put it in here, this part of the html
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
