import React, { Component } from "react";
import URLForm from "./URLForm";
import NavioDiv from "./NavioDiv";
import MetaData from "./MetaData";

const loadAllData = async recurso => {
  const allData = [];
  let data = [0];
  let i = 0;
  while (data.length > 0) {
    const resp = await fetch(
      `https://www.datos.gov.co/resource/${recurso}.json?$limit=1000&$offset=${i *
        1000}`
    );
    console.log(resp);
    data = await resp.json();

    for (let row of data) {
      allData.push(row);
    }
    i += 1;
  }
  return allData;
};

export default class Main extends Component {
  state = {
    loading: false,
    data: null,
    error: null
  };

  errorDeFormato = () => {
    this.setState({
      error:
        "La url debe tener el formato 'datos.gov.co/resource/{identificador}'" +
        " o puedes pasar únicamente el identificador del recurso '{identificador}'."
    });
  };

  onSubmit = async url => {
    if (!url) return;

    if (window.navigator.onLine) {
      this.setState({ error: null, loading: true, metadata:null, data:null });
      try {
        url = url.toLowerCase();
        let resource;
        if (url.includes("datos.gov.co/resource/")) {
          const splitPath = url.split("datos.gov.co/resource/");
          if (splitPath.length == 2) {
            if (splitPath[1]) {
              resource = splitPath[1].replace(".json", "");
            } else {
              return this.errorDeFormato();
            }
          } else {
            return this.errorDeFormato();
          }
        } else {
          resource = url;
        }

        const resp = await fetch(
          `http://datos.gov.co/api/views/metadata/v1/${resource}`
        );
        
        if (resp.ok) {
          const metadata = await resp.json();
          this.setState({metadata});  
          const allData = await loadAllData(resource);
          this.setState({ data: allData, loading: false, error: null });
        } else if (resp.status === 404) {
          this.setState({
            error: "El recurso no existe, por favor revisa la url."
          });
        } else if (resp.status === 500) {
          this.setState({
            error: "Hubo un error con el servidor, por favor intenta más tarde."
          });
        } else {
          throw new Error();
        }
      } catch {
        this.setState({
          error: "Hubo un error en la petición, por favor intenta más tarde."
        });
      }
    } else {
      this.setState({
        error: "No tienes conexión a internet, por favor intenta más tarde."
      });
    }
  };

  render() {
    console.log(this.state)
    return (
      <div className="row">
        <div className="col">
          <h2>Visualización datos.gov.co</h2>
          <URLForm onSubmit={this.onSubmit} />
          <MetaData {...this.state}/>
          <NavioDiv {...this.state} />
        </div>
      </div>
    );
  }
}
