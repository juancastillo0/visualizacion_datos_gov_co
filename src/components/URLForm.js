import React, { Component } from "react";

export default class URLForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submit = event =>{
      event.preventDefault();
    this.props.onSubmit(this.state.url)
  }
  render() {
    return (
      <form className="d-flex justify-content-center" >
        <div className="form-group col">
          <label htmlFor="url-input">Url o Identificador del Recurso</label>
          <input
            type="text"
            id="url-input"
            className="form-control"
            value={this.state.url}
            name="url"
            onChange={this.onChange}
            aria-describedby="url-input-help"
            style={{ maxWidth: 500 }}
          />
        </div>
        <div className="d-flex form-group col align-items-end">
        <button
          className="btn btn-primary"
          onClick={this.submit}
        >
          Cargar
        </button>
        </div>
      </form>
    );
  }
}
