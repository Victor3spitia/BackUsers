import { useState, useEffect } from "react";
import axios from "axios";
import ListUser from "./ListUsuario";
import FormularioUser from "./FormularioAlumno";
import EditarUser from "./FormularioEditar";
import Titulo from "./Titulo";

/** Alertas con React Toastify */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const [alumnos, setAlumnos] = useState([]); // Para almacenar la lista de usuarios
  const [alumnoEditar, setAlumnoEditar] = useState(null); // Para almacenar la data del usuario que se va a editar
  const [showRegistroForm, setShowRegistroForm] = useState(true); //Para mostrar el formulario de acuerdo a la variable (true o false) formulario para registrar o editar

  const URL_API = "http://localhost:3000/Usuarios";

  useEffect(() => {
    // Obtener lista de usuarios al cargar la página
    obtenerAlumnos();
  }, []);

  const obtenerAlumnos = async () => {
    try {
      const response = await axios.get(URL_API); // este te lleva al elace get
      setAlumnos(response.data);
    } catch (error) {
      console.error("Error al obtener Usuarios:", error);
    }
  };

  const eliminarAlumno = async (id) => {
    try {
      const response = await axios.delete(`${URL_API}/${id}`); /* primero busca el GET para eliminar por el id */
      console.log("Usuario eliminado:", response.data);
      toast.error("Usuario eliminado correctamente.");
      // Actualizar la lista de usuarios
      obtenerAlumnos();
    } catch (error) {
      console.error("Error al eliminar el Usuario:", error.data);
    }
  };

  const editarDatosUser = async (id) => {
    try {
      const response = await axios.put(`${URL_API}/${id}`);/* primero busca el GET para editar por el id */
      console.log("datos del Usuario:", response.data);
      setShowRegistroForm(false);
      setAlumnoEditar(response.data[0]); // Almacenar los datos del usuario
    } catch (error) {
      console.error("Error al actualizar el Usuario:", error);
    }
  };

  const agregarAlumno = async (nuevoAlumno) => {
    console.log(nuevoAlumno);
    try {
      const response = await axios.post(URL_API, nuevoAlumno);/* guarda los nuevos datos para la base de datos */
      toast.success("usuario registrado correctamente.");
      console.log("Usuario agregado:", response.data);
      // Actualizar la lista de alumnos
      obtenerAlumnos();
    } catch (error) {
      console.error("Error al agregar al Usuario:", error);
    }
  };

  const handleActualizarAlumno = async (datosAlumno) => {
    try {
      console.log("Información del usuario por actualizar:", datosAlumno);
      // Realizar la solicitud PUT al backend
      const response = await axios.put(
        `${URL_API}/${datosAlumno.id}`,
        datosAlumno
      );
      console.log("Respuesta de la API:", response.data);
      toast.success("Alumno actualizado correctamente.");
      // Actualizar la lista de usuarios
      obtenerAlumnos();
    } catch (error) {
      console.error("Error al actualizar los datos del alumno:", error);
      // Manejar el error si es necesario
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="row justify-content-md-center">
        <div className="col-md-5">
          <Titulo
            estado={showRegistroForm}
            setShowRegistroForm={setShowRegistroForm}
          />
          {/* Formulario para registrar o editar */}
          {showRegistroForm ? (
            <FormularioUser agregarAlumno={agregarAlumno} />
          ) : (
            <EditarUser
              alumno={alumnoEditar}
              handleActualizarAlumno={handleActualizarAlumno}
            />
          )}
        </div>

        {/* llama la lista de usuarios */}
        <ListUser
          alumnos={alumnos}
          eliminarAlumno={eliminarAlumno}
          editarDatosUser={editarDatosUser}
        />
      </div>
    </>
  );
};

export default HomePage;
