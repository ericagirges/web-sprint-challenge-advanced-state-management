import axios from "axios";

export const ADD_SMURF = "ADD_SMURF";
export const POST_SMURF_SUCCESS ="POST_SMURF_SUCCESS"
export const UPDATE_FORM_VALUES = "UPDATE_FORM_VALUES";

export const addSmurf = (smurf) => {
    return (dispatch) => {
        axios
        .post("http://localhost:3333/smurfs", smurf)
        .then((response) => {
            dispatch({type: POST_SMURF_SUCCESS, 
                payload: response.data})
        })
        .catch((error) => {
            alert("Smurf could not be added at this time");
        })

    }
};

export const updateSmurfForm = (formValues) => {
    return {
        type: UPDATE_FORM_VALUES,
        payload: formValues
    }
}