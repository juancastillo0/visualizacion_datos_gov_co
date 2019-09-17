import React, { Component } from "react";

export default class Visualizacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }

  onChange = event => {
    this.setState({ url: event.target.value });
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.url} onChange={this.onChange} />
        <button onClick={() => this.props.onSubmit(this.state.url)}>
          Cargar
        </button>
      </div>
    );
  }
}
