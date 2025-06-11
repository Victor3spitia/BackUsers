import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Lista({ eliminarAlumno, editarDatosUser}) {
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
<>
    <div>
      <h1 className="text-center mb-5 font-weight-bold">
        Lista de Usuarios <span className="circulo">{datos.length}</span>{" "}
        <hr />
      </h1>
      <table>
        <thead >
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            {/* <th>Contraseña</th> */}
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
              {/* <td>{d.contraseña}</td> */}
              <td>{d.Rol}</td>
              <td>{d.fecha_creacion}</td>
              <td>
                  <span className="flex_btns">
                    <button /* boton de borrado */
                      title={`Borrar usuario ${d.nombre}`}
                      className="btn btn-danger"
                      style={{ marginRight: "5px" }}
                      type="button"
                      onClick={() => eliminarAlumno(d.id)}> {/* no es con datos.map sino es con la d que esta al lado */}
                      <i className="bi bi-trash"></i>
                    </button>

                    <button /* boton de edicion */
                      title={`Editar usuario ${d.nombre}`}
                      className="btn btn-success btn_add"
                      type="button"
                      onClick={() => editarDatosUser(d.id)}>{/* no es con datos.map sino es con la d que esta al lado */}
                      <i className="bi bi-arrow-clockwise"></i>
                    </button>
                  </span>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
  );
};
 Lista.propTypes = {
  alumnos: PropTypes.array.isRequired,
  eliminarAlumno: PropTypes.func.isRequired,
  editarDatosUser: PropTypes.func.isRequired,
};


