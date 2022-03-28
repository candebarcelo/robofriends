import React  from "react"; // we need to import react so it understands JSX

const Card = ({ name, email, id }) => { // destructuring inside the (), same as doing: const { name, email, id } = props; 
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"> {/* tachyons classes */}
            <img alt='robot' src={`https://robohash.org/${id}?200x200`} /> {/* robohash api will generate a different robot image for any 
                                                                            text. u put the text after the / and u can use a ? to state
                                                                            its size afterwards. */}
            <div>
                <h2>{name}</h2> {/* wrap the props in {} bc it's a JS expression. */}
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;