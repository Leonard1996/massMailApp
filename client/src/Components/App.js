import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Route exact path="/" render={() => <div>hello </div>} />
          
          <Route
            exact
            path="/surveys"
            render={() => <div>SURVEY </div>}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
