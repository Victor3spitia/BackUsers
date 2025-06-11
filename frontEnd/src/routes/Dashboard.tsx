import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { API_URL } from "../auth/authConstants";
import { Link } from 'react-router-dom'
import DefaultLayout from './../layout/DefaultLayout';
import Piep from "../layout/PieP";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export default function Dashboard() {
  const auth = useAuth();

  const [todos, setTodos] = useState<Todo[]>([]);
  const [value, setValue] = useState("");

  async function getTodos() {
    const accessToken = auth.getAccessToken();
    try {
      const response = await fetch(`${API_URL}/Usuarios`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const json = await response.json();
        setTodos(json);
        console.log(json);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function createTodo() {
    if (value.length > 3) {
      try {
        const response = await fetch(`${API_URL}/Usuarios`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.getAccessToken()}`,
          },
          body: JSON.stringify({ title: value }),
        });
        if (response.ok) {
          const todo = (await response.json()) as Todo;
          setTodos([...todos, todo]);
        }
      } catch (error) {}
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createTodo();
  }

  return (
    <>
    <DefaultLayout/>
     <section className="dashboard">
    <div className="container dashboard_container">
    <aside>
        <ul>
            <li>
                <Link to="/add_post"><i className="bi bi-pen"></i>
            <h5>Añadir Post</h5>
                </Link>
            </li>
            <li>
                <Link to="/dashboard"  className="active"><i className="bi bi-postcard"></i>
            <h5>Gestionar Post</h5>
                </Link>
            </li>
            <li>
                <Link to="/gestionUser"><i className="bi bi-person-gear"></i>
            <h5>Gestionar cuenta</h5>
                </Link>
            </li>
            <li>
            </li>
            <li>
                
            </li>
        </ul>
    </aside>
    
    <main>
        <h2>Gestionar Usuarios</h2>
        <table>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>categoria</th>
                    <th>editar</th>
                    <th>Borrar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
                    <td>Artes</td>                             
                    <td><a href="edit_post.html" className="btn sm">editar</a></td>
                    <td><a href="delete_categoria.html" className="btn sm danger">borrar</a></td>
                    <td>Empleado o Cliente</td>
                </tr>
                <tr>
                    <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
                    <td>Artes</td>                             
                    <td><a href="edit_post.html" className="btn sm">editar</a></td>
                    <td><a href="delete_categoria.html" className="btn sm danger">borrar</a></td>
                    <td>Empleado o Cliente</td>
                </tr>
                <tr>
                    <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
                    <td>Artes</td>                             
                    <td><a href="edit_post.html" className="btn sm">editar</a></td>
                    <td><a href="delete_categoria.html" className="btn sm danger">borrar</a></td>
                    <td>Empleado o Cliente</td>
                </tr>
            </tbody>
        </table>
    </main>
    </div>
</section>
    <Piep/>
    </>
  );
}
