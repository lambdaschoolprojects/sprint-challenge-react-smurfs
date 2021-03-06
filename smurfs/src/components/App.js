import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { getSmurfs } from "../actions";
import SmurfyContainer from "./SmurfyContainer";
import SmurfForm from "./SmurfForm";

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <SmurfForm />
        <SmurfyContainer smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  let newProps;

  if (!state.error) {
    newProps = {
      smurfs: state.smurfs
    };
  } else {
    newProps = {
      error: state.error
    };
  }

  return newProps;
  // const { smurfs } = state;
  //
  // return {
  //   smurfs
  // };
};

export default connect(
  mapStateToProps,
  {
    getSmurfs
  }
)(App);
