import { CHANGE_SEARCH_FIELD } from "./constants";

const initialState = {
    searchField: ''
}

export const searchRobots = (state=initialState, action={}) => {
    switch(action.type) { // if action.type is equal to...
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload}); /* we could also do this:
            return {...state, searchField: action.payload} */
        default: // if action.type is none of the above, default to state.
            return state;
    }
}