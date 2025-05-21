import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const FormularioAlumno = ({ handleActualizarAlumno, Usuario }) => {
  console.log("Llegue con el Usuario: ", Usuario);
  const [alumnoData, setAlumnoData] = useState({
    nombre: "",
    Email: "",
    contraseña: "",
    Rol: "Cliente", 
    fecha_creacion: "",
  });

  useEffect(() => {
    if (Usuario) {
      setAlumnoData(Usuario);
    }
  }, [Usuario]);
 
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAlumnoData((prevAlumnoData) => ({
      ...prevAlumnoData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /* const handleChangeSexo = (e) => {
    alumnoData.Rol(e.target.value);
  }; */
  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    const updatedAlumno = {
      id: Usuario ? Usuario.id : null,
      ...alumnoData,
      habla_ingles: alumnoData.habla_ingles ? "1" : "0",
    };
    handleActualizarAlumno(updatedAlumno);
    // Limpia el formulario después de enviar
    setAlumnoData({
    nombre: "",
    Email: "",
    contraseña: "",
    Rol: "", 
    fecha_creacion: "",
    });
  };

  return (
    <form onSubmit={handleSubmitUpdate}>
      <div className="mb-3">
        <label className="form-label">Nombre del Usuario</label>
        <input
          type="text"
          name="nombre_alumno"
          className="form-control"
          value={alumnoData.nombre}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email del Usuario</label>
        <input
          type="text"
          name="email_alumno"
          className="form-control"
          value={alumnoData.Email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">contraseña</label>
        <input
          type="text"
          name="nombre_alumno"
          className="form-control"
          value={alumnoData.contraseña}
          onChange={handleChange}
        />
      </div>
      
      <div className="mb-3">
        <label className="form-label">Seleccione el Curso</label>
        <select
          name="curso_alumno"
          className="form-select"
          value={alumnoData.Rol}
          onChange={handleChange}
          required>
          <option value="">Seleccione el Curso</option>
          <option value="Cliente">Cliente</option>
          <option value="Empleado">Empleado</option>
        </select>
      </div>
      <div className="d-grid gap-2 mb-5">
        <button type="submit" className="btn btn-primary block btn_add">
          Actualizar datos del Usuario
        </button>
      </div>
    </form>
  );
};

FormularioAlumno.propTypes = {
  handleActualizarAlumno: PropTypes.func.isRequired,
  alumno: PropTypes.object, // Datos del alumno para editar
};

export default FormularioAlumno;
