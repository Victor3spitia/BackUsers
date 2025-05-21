import { useState } from "react";
import PropTypes from "prop-types";

const FormularioAlumno = ({ agregarAlumno }) => {
  const [nombre, setNombre] = useState("");
  const [Email, setEmail] = useState("");
  const [contraseña, setcontra] = useState("");
  const [Rol, setRol] = useState("Cliente");
  /* const [hablaIngles, setHablaIngles] = useState(false); */

  // Función para manejar cambios en el sexo del alumno
/*   const handleChangeSexo = (e) => {
    setRol(e.target.value);
  };
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    agregarAlumno({
      nombre: nombre,
      Email: Email,
      contraseña: contraseña,
      Rol: Rol,
    });
    // Limpiar el formulario después de agregar el alumno
    setNombre("");
    setEmail("");
    setcontra("");
    setRol("Cliente");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          name="nombre"
          className="form-control"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email </label>
        <input
          type="text"
          name="Email"
          className="form-control"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">contraseña</label>
        <input
          type="text"
          name="contraseña"
          className="form-control"
          value={contraseña}
          onChange={(e) => setcontra(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Seleccione el Rol</label>
        <select
          name="Rol"
          className="form-select"
          value={Rol}
          onChange={(e) => setRol(e.target.value)}
          required>
          <option value="">Seleccione el Rol</option>
          <option value="Empleado">Empleado</option>
          <option value="Cliente">Cliente</option>
        </select>
      </div>
      <div className="d-grid gap-2 mb-5">
        <button type="submit" className="btn btn-primary block btn_add">
          Registrar nuevo Usuario
        </button>
      </div>
    </form>
  );
};

FormularioAlumno.propTypes = {
  agregarAlumno: PropTypes.func.isRequired,
};
export default FormularioAlumno;
