import React, { Component } from "react";
import Router from "Components/Router";
import Header from "Components/Header";

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <Header />
        <Router />
      </React.StrictMode>
    );
  }
}

export default App;
