import React from "react";
import Card from "./Card";
// import {robots} from './robots';

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                            key={robots[i].id} // we should add a unique key to each item in a loop, to minimize the program's effort. if one item is 
                                            // changed it'll know which one and just modify that one, otherwise it'll have to re-render the entire dom.
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email} 
                        />
                     ); /* we can add properties inside this tag, like greeting, for example. u write it like a JS expression, between {} */
                })
            }
        </div>
    );
}

export default CardList;