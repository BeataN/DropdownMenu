import React, { Component } from "react";
import axios from "axios";
import DropdownMenu from "./DropdownMenu.js";
import Content from "./Content.js";

class App extends Component {
  state = {
    menuData: [],
    content: null
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/menuData")
      .then(response => this.setState({ menuData: response.data }));
  }

  handleContentChange = content => {
    this.setState({
      content: content
    });
  };

  render() {
    return (
      <div className="App">
        <DropdownMenu
          menuData={this.state.menuData}
          onElementSelected={this.handleContentChange}
        />
        <Content content={this.state.content} />
      </div>
    );
  }
}

export default App;
