import React from "react";

const Smurf = ({smurf}) => {
    return (
        <div>
            <h3>Name: {smurf.name}</h3>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>

        </div>
    )

}

export default Smurf;