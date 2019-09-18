import React from "react";

export default function MetaData({ loading, error, metadata }) {
  if ( error || !metadata) {
    return false;
  }
//   metadata = {
//     name: "Catálogo Nacional de Estaciones del IDEAM",
//     category: "Ambiente y Desarrollo Sostenible",
//     webUri: "https://www.datos.gov.co/d/hp9r-jxuu",
//     license: "Creative Commons Attribution | Share Alike 4.0 International"
//   };
  const { name, category, description, webUri, license } = metadata;
  return (
    <table className="table table-striped" style={{maxWidth:700}}>
      <tbody>
        <tr>
          <th scope="row">Nombre</th>
          <td scope="col-auto">{name}</td>
        </tr>
        <tr>
          <th scope="row">Categoría</th>
          <td>{category}</td>
        </tr>
        <tr>
          <th scope="row">Recurso Web</th>
          <td><a href={webUri}>{webUri}</a></td>
        </tr>
        <tr>
          <th scope="row">Licencia</th>
          <td>{license}</td>
        </tr>
      </tbody>
    </table>
  );
}
