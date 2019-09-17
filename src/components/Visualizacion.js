import React, { Component } from "react";

export default class Visualizacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      nav: 0
    };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.url}
          name="url"
          onChange={this.onChange}
        />
        <input
          type="number"
          value={this.state.nav}
          name="nav"
          onChange={this.onChange}
        />
        <button onClick={() => this.props.onSubmit(this.state.url, this.state.nav)}>
          Cargar
        </button>
      </div>
    );
  }
}
