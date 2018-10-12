import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";

import Navbar from "./components/layout/Navbar";
import Quotes from "./components/quote/Quotes";
import store from "./components/redux/store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container-fluid App text-center">
          <Navbar />
          <Quotes />
        </div>
      </Provider>
    );
  }
}

export default App;
