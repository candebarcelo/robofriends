import { CHANGE_SEARCH_FIELD } from "./constants";

export const setSearchField = (text) => ({ // text is the input it receives, and it'll return this object
    type: CHANGE_SEARCH_FIELD, // action being taken. it's all caps as a standard for constants.
    payload: text // payload to send the data 
})