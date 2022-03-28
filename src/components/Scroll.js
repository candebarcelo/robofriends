import React from "react";

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '1px solid black', height: '500px' }}> {/* by using the style attribute and 
                                                                                double curly brackets {{}}, u can write in sth kinda 
                                                                                like css. but u camelCase instead of using hyphens, for
                                                                                example, here it's overflowY instead of overflow-y */}
            {props.children} {/* displays its children, that is, what is inside of its tags in the App.js file. */}
        </div>
    );
}

export default Scroll