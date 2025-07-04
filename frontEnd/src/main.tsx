import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider.tsx";
/* aqui van las rutas  */
import Login from "./routes/Login.tsx";
import Signup from "./routes/Signup.tsx";
import Dashboard from "./routes/Dashboard.tsx";
import ProtectedRoute from "./routes/ProtectedRoute.tsx";
import Profile from "./routes/Profile.tsx";
import Home from "./pages/Home.jsx";
import AddPost from "./pages/add_post.jsx";
import Curses from "./pages/courses.jsx";
import EditPost from "./pages/edit_post.jsx";
import Post from "./pages/post.jsx";
import EditUser from "./pages/edit_user.jsx";


import "./style.css";
/* configurar rutas para elejir como se comportan */
/* arreglo para especificar un objeto como ruta */
const router = createBrowserRouter([ 
  {
    path: "/",   /* ruta raiz */
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cursos",
    element: <Curses />
  }, 
  {
    path: "/editPost",
    element: <EditPost/>
  },
  {
    path:"/addPost",
    element: <AddPost/>
  },
  {
    path:"/singlePost",
    element: <Post/>
  },

  {
    path: "/editUser",
    element: <EditUser/>,
  },
    {
    path: "/dashboard",
    element: <Dashboard />, 
    },
  
  {
    path: "/",
    element: <ProtectedRoute />,//ruta protegida
    children: [
      {
        path: "/me",
        element: <Profile />,
      },
      /* {
    path: "/dashboard",
    element: <Dashboard />, 
    }, */
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);