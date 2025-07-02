import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { AuthResponse, AuthResponseError } from "../types/types";
import { Link } from 'react-router-dom';
import Navbar from "../layout/Navbar";
import Piep from "../layout/PieP";

export default function Login() {
  const [name, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");

  const auth = useAuth();

  function handleChange(e: React.ChangeEvent) {
    const { name, value } = e.target as HTMLInputElement;
    if (name === "nombre") {
      setNombre(value);
    }
    if (name === "contraseña") {
      setPassword(value);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // auth.setIsAuthenticated(true);
    try {
      //console.log (JSON.stringify({ nombre, contraseña }));
      console.log("¿Está autenticado?", auth.isAuthenticated);

      const response = await fetch(`http://localhost:3000/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: 'women', password: 1234 }),
      });
        if (response.ok) {
        const json = (await response.json()) as AuthResponse;
        console.log(json);

        if (json.body.accessToken && json.body.refreshToken) {
          auth.saveUser(json);
        }
      } else {
        const json = (await response.json()) as AuthResponseError;

        setErrorResponse(json.body.error);
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
    <Navbar/>
      
      <section className="form_section">
    <div className="container section_container">
        <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        
        {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
        <label>Name</label>
        <input
          name="nombre"
          type="text"
          onChange={handleChange}
          value={name}
        />
        <label>Password</label>
        <input
          name="contraseña"
          type="password"
          onChange={handleChange}
          value={password}
        />

        <button type="submit" className="btn">Sign Up</button>
            <small>¿No tienes una cuenta?<Link to="/signup">Crear Cuenta </Link></small>
      </form>  
      </div>
</section>

      <Piep/>
    </>
  );
}


