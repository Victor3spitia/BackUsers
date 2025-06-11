import { Link } from "react-router-dom";
import React from "react";
import { useEffect } from 'react';
  
interface DefaultLayoutProps {
  children?: React.ReactNode;
}
export default function DefaultLayout({ children }: DefaultLayoutProps) {

useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav instanceof HTMLElement) {
        nav.classList.toggle('window-scroll', window.scrollY > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = document.querySelectorAll(".faq");

useEffect(() => { //botones para el menu en la version de mobil
    const menu = document.querySelector(".nav_menu") as HTMLElement | null;
    const openBtn = document.querySelector("#open-menu-btn") as HTMLElement | null;
    const closeBtn = document.querySelector("#close-menu-btn") as HTMLElement | null;

    if (!menu || !openBtn || !closeBtn) return;

    const openNav = () => {
      menu.style.display = "flex";
      closeBtn.style.display = "inline-block";
      openBtn.style.display = "none";
    };

    const closeNav = () => {
      menu.style.display = "none";
      closeBtn.style.display = "none";
      openBtn.style.display = "inline-block";
    };

    openBtn.addEventListener("click", openNav);
    closeBtn.addEventListener("click", closeNav);

    // Limpieza de eventos
    return () => {
      openBtn.removeEventListener("click", openNav);
      closeBtn.removeEventListener("click", closeNav);
    };
    }, []);
  
return (
    <>  
      <nav>
        <div className="container nav_container">
            <Link to="/" className="nav_logo"><img src="/expertrix.png"/></Link>
            <ul className="nav_menu">
                <Link to="/">Inicio</Link>
                <Link to="/cursos">cursos</Link>
                <Link to="/signup">Registrarse</Link>
                <Link to="/login">Inicio sesion</Link> 
                <li className="nav_perfil">
                        <div className="avatar">
                            <img src="./images/avatar1.jpg"/>
                        </div>
                        <ul>
                            <Link to="/dashboard">dashboard</Link>
                            <Link to="/logout">Cerrar sesion</Link>
                        </ul>
                    </li>
                </ul>
                <button id="open-menu-btn"><i className="bi bi-list"></i></button>
                <button id="close-menu-btn"><i className="bi bi-x-square"></i></button>
            </div>
        </nav>

      <main>{children}</main>
    </>
  );
}
