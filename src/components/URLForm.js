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

  submit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.url);
  };
  render() {
    return (
      <form className="text-center m-auto py-4" style={{ maxWidth: 700 }}>
        <label htmlFor="url-input" style={{ fontSize: "1.2em" }}>
          Url o Identificador del Recurso
        </label>
        <input
          type="text"
          id="url-input"
          className="form-control m-auto"
          value={this.state.url}
          name="url"
          onChange={this.onChange}
          aria-describedby="url-input-help"
          style={{ maxWidth: 500 }}
        />
        <p className="pt-2">
          La url debe tener el formato datos.gov.co/resource/$id (https://www.datos.gov.co/resource/hp9r-jxuu.json) o puedes pasar
          únicamente el identificador del recurso. Por ejemplo, 'hp9r-jxuu'.
        </p>
        <button className="btn btn-primary" onClick={this.submit}>
          Cargar
        </button>
      </form>
    );
  }
}
