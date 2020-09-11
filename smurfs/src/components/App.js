import React, { useEffect } from "react";
import { connect } from "react-redux";
import SmurfsList from "./SmurfsList";
import { fetchSmurfs } from "../store/actions/renderSmurfsActions";
import "./App.css";
import SmurfEntryForm from "./SmurfEntryForm";
import styled from "styled-components";

const Title = styled.h1 `
    font-family: "Grandstander";
    font-size: 3.2em;
`

const Subtitle = styled.h2 `
    font-family: "Grandstander";
    font-size: 2.0em;
`

function App({ loadingSmurfs, errorMessage, fetchSmurfs, smurfs }) {
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);


  return (
    <div className="App">
      <Title>Welcome to Smurf Village</Title>
      <Subtitle>We hope you have a very Smurfy day!</Subtitle>
      <SmurfEntryForm />
      {!loadingSmurfs ? <SmurfsList /> : <p>....Fetching Smurfs!</p>}
      {errorMessage !== "" ? <p>{errorMessage}</p> : null}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs,
    loadingSmurfs: state.loadingSmurfs,
    errorMessage: state.errorMessage,
  }
}

export default connect(mapStateToProps, { fetchSmurfs }) (App);
