import {
  FETCH_SMURFS,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_ERRORS,
  ADD_SMURF,
  UPDATE_FORM_VALUES,
} from "../actions";

const initialState = {
  smurfs: [
    {
      name: "",
      age: "",
      height: "",
      id: 0,
    },
  ],
  loadingSmurfs: true,
  errorMessage: "",
  formValues: {
    name: "",
    age: "",
    height: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        loadingSmurfs: true,
      };
    case FETCH_SMURFS_ERRORS:
      return {
        ...state,
        loadingSmurfs: false,
        errorMessage: action.payload.message,
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        loadingSmurfs: false,
        errorMessage: "",
      };
    case ADD_SMURF:
      return {
        ...state,
        formValues: initialState.formValues,
        smurfs: [...state.smurfs, action.payload],
      };
    case UPDATE_FORM_VALUES:
      return {
        ...state,
        formValues: action.payload,
      };
    default:
      return state;
  }
};
