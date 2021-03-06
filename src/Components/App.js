import React, { Component } from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <Router />
        <GlobalStyles />
      </React.StrictMode>
    );
  }
}

export default App;
