import React, { Component } from "react";
import Visualizacion from "./Visualizacion";
import NavioDiv from "./NavioDiv";

export default class Main extends Component {
  state = {
    loading: false,
    data: null,
    error: null
  };

  onSubmit = async (url, nav) => {
    this.setState({ error: null, loading: true });
    try {
      const resp = await fetch(`${url}`);
      const data = await resp.json();
      console.log(data)
      this.setState({ data, loading: false, error: null });
    } catch {
      this.setState({ error: "error" });
    }
  };

  render() {
    return (
      <div>
        <Visualizacion onSubmit={this.onSubmit} />
        <NavioDiv {...this.state} />
      </div>
    );
  }
}
