import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants.js";

export const setSearchField = (text) => ({ // text is the input it receives, and it'll return this object
    type: CHANGE_SEARCH_FIELD, // action being taken. it's all caps as a standard for constants.
    payload: text // payload to send the data 
}) // the () mean it's an automatic return

export const requestRobots = () => (dispatch) => { /* the first function is run by the thunk middleware, and it returns 
                                                    the dispatch method so that we can use it here inside this function.
                                                    redux itself doesn't understand this, bc it returns a function and 
                                                    it only understands when it returns an object. but thunk does 
                                                    understand this, that's why we use it. */
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users') // fetch info from an api. u can also use 
                                                            // https://jsonplaceholder.cypress.io/users it's the same
        .then(response => response.json()) // convert it to json
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}
