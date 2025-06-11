import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { AuthResponse, AuthResponseError } from "../types/types";
import { Link } from 'react-router-dom' 
import DefaultLayout from "../layout/DefaultLayout";
import Piep from "../layout/PieP";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorResponse, setErrorResponse] = useState("");

  const auth = useAuth();

  function handleChange(e: React.ChangeEvent) {
    const { name, value } = e.target as HTMLInputElement;
    if (name === "username") {
      setUsername(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // auth.setIsAuthenticated(true);
    try {
      const response = await fetch("http://localhost:3000/dashboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
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
    <DefaultLayout/>
      
      <section className="form_section">
    <div className="container section_container">
        <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        
        {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
        <label>Name</label>
        <input
          name="username"
          type="text"
          onChange={handleChange}
          value={username}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
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


