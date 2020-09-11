import React from "react";
import { connect } from "react-redux";
import { addSmurf, updateSmurfForm } from "../store/actions";
import styled from "styled-components";

const StyledForm = styled.form`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input `
  margin-bottom: 10px;
  height: 30px;
  width: 300px;
  font-family: "Arimo";
  text-align: center;
  font-size: 1.0em;
`

const AddButton = styled.button `
  padding: 2px 7px;
  background-color: #EEC920;
  text-decoration: none;
  color: black;
  font-size: 1.3em;
  font-family: "Arimo";
  border-radius: 5px;
  width: 200px;

`

const SmurfEntryForm = ({ formValues, addSmurf, updateSmurfForm }) => {
  const handleInputChanges = (key, value) => {
    updateSmurfForm({
      ...formValues,
      [key]: value,
    });
  };

  const handleSubmitForm = () => {
    addSmurf(formValues);
  }

  return (
    <StyledForm>
      <h2>Register a new Smurf!</h2>
      <label>
        Name:
        <StyledInput
          type="text"
          name="name"
          id="name"
          onChange={(e) => handleInputChanges("name", e.target.value)}
          value={formValues.name}
        />
      </label>
      <label>
        Age:
        <StyledInput
          type="text"
          name="age"
          id="age"
          onChange={(e) => handleInputChanges("age", e.target.value)}
          value={formValues.age}
        />
      </label>
      <label>
        Height:
        <StyledInput
          type="text"
          name="height"
          id="height"
          onChange={(e) => handleInputChanges("height", e.target.value)}
          value={formValues.height}
        />
      </label>
      <AddButton type="submit" onClick={handleSubmitForm}>Submit</AddButton>
    </StyledForm>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.formValues,
  };
}

export default connect(mapStateToProps, { addSmurf, updateSmurfForm })(
  SmurfEntryForm
);
