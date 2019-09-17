import React, { Component } from "react";
import Visualizacion from "./Visualizacion";
import NavioDiv from "./NavioDiv";

export default class Main extends Component {
  state = {
    data: null
  };

  onSubmit = async url => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      this.setState({ data });
    } catch {
      console.log("error fetch");
    }
  };

  render() {
    return (
      <div>
        <Visualizacion onSubmit={this.onSubmit} />
        <NavioDiv data={this.state.data} />
      </div>
    );
  }
}
