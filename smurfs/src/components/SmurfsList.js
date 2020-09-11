import React from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";

const SmurfsList = ({smurfs}) => {
    return (
        <div>
            {smurfs.map((smurf) => {
                return <Smurf key={smurf.id} smurf={smurf} />;
            })}

        </div>
    )
}

function mapStateToProps(state) {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(SmurfsList);