import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';

function App({ eliminarAlumno,obtenerDatosAlumno}) {
  const [datos, setData] = useState([]);
  // Función para realizar la llamada a la API
  const fetchData = () => {
    fetch('http://localhost:3000/Usuarios')
      .then(res => res.json())
      .then(data => setData(data.data))
      .catch(err => console.log(err));
  };

  // useEffect para realizar la llamada cuando el componente se monta
  useEffect(() => {
    fetchData(); // Esto ya hace la llamada al API
  }, []);

  return (
    <div className='containerSQL'>
      <h1 className="text-center mb-5 font-weight-bold">
        Lista de Alumnos <span className="circulo">{datos.length}</span>{" "}
        <hr />
      </h1>
      <table>
        <thead >
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Contraseña</th>
            <th>Rol</th>
            <th>Fecha de Creación</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.nombre}</td>
              <td>{d.Email}</td>
              <td>{d.contraseña}</td>
              <td>{d.Rol}</td>
              <td>{d.fecha_creacion}</td>
              <td>
                  <span className="flex_btns">
                    <button
                      title={`Borrar usuario ${datos.nombre}`}
                      className="btn btn-danger"
                      style={{ marginRight: "5px" }}
                      type="button"
                      onClick={() => eliminarAlumno(datos.id)}>
                      <i className="bi bi-trash3"></i>
                    </button>

                    <button
                      title={`Editar alumno ${datos.nombre}`}
                      className="btn btn-success btn_add"
                      type="button"
                      onClick={() => obtenerDatosAlumno(datos.id)}>
                      <i className="bi bi-arrow-clockwise"></i>
                    </button>
                  </span>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
App.propTypes = {
  alumnos: PropTypes.array.isRequired,
  eliminarAlumno: PropTypes.func.isRequired,
  obtenerDatosAlumno: PropTypes.func.isRequired,
};

export default App;
