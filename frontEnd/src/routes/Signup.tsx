import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthResponse, AuthResponseError } from "../types/types";
import { Link } from 'react-router-dom';
import { API_URL } from "../auth/authConstants"; 
import DefaultLayout from "../layout/Navbar";
import Piep from "../layout/PieP";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("");
  const [errorResponse, setErrorResponse] = useState("");

  const auth = useAuth();
  const goTo = useNavigate();//te lleva a otra pagina

  

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(username, email, password, rol); //lo muestra a la consola

    try {
      const response = await fetch(`${API_URL}/signup`, {// llamada de la URL
        method: "POST",//solicitud 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, rol }), 
      });
      if (response.ok) {
        const json = (await response.json()) as AuthResponse;
        console.log(json);
        setUsername("");
        setEmail("");
        setRol("");
        setPassword("");
        goTo("/Dashboard"); // te redirecciona a otra pagina
      } else {
        const json = (await response.json()) as AuthResponseError;
        setErrorResponse(json?.body?.error || "Error en el body");
        //setErrorResponse(json.body.error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
    <DefaultLayout/>
<section className="form_section">
    <div className="container section_container">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
        <label>Name</label>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          name="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          />
        <label>Rol</label>
        <select
        name="Rol"
        onChange={(e) => setRol(e.target.value)}
        value={rol}
        >
        <option value="">Seleccione el rol</option>
        <option value="Empleado">Empleado</option>
        <option value="Cliente">Cliente</option>
        </select>
        
          <button type="submit" className="btn">Crear cuenta</button>
        <small>¿Ya tienes una cuenta?<Link to="/login">Inicia Sesion </Link></small>
      </form>
        </div>
</section>
    <Piep/>
    </>
  );
}