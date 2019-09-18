import React, { Component } from "react";
import navio from "navio";

export default class Visualizacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navio: null
    };
    this.navioInstance = null;
  }

  setElem = elem => {
    if (elem) this.navioInstance = navio(elem, 600);
  };

  componentDidUpdate() {
    if (this.props.data && this.navioInstance) {
      this.navioInstance.data(this.props.data);
      this.navioInstance.addAllAttribs();
    }
  }

  render() {
    const show = !(this.props.error || this.props.loading);
    return (
      <div>
        {this.props.error
          ? this.props.error
          : this.props.loading
          ? "Cargando..."
          : ""}
        <div id="navio" style={{display: show?"":"none"}} ref={this.setElem}></div>
      </div>
    );
  }
}
