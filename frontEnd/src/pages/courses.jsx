import React from 'react'
import { Link } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Piep from "../layout/PieP";


function courses() {
  return (
    <>
    <DefaultLayout/>
{/* <!-- BARRA BUSQUEDA --> */}
    <section className="barra_busqueda">
        <form className="container barra_container" action="">
            <div>
                <i className="bi bi-search"></i>
                <input type="search" name="" placeholder="search"/>
            </div>
            <button type="submit" className="btn">GO</button>
        </form>
    </section>
{/* <!-- END BARRA BUSQUEDA --> */}

{/* <!-- POST VARIADOS --> */}
    <section className="posts">
        <div className="container posts_container">
            <article className="post">
                <div className="post_miniatura">
                    <img src="./images/blog2.jpg"/>
                </div>
                <div className="post_info">
                    <Link to="" className="categoria_button">vida salvaje</Link>
                    <h3 className="post_titulo"><Link to="post.html">Lorem ipsum dolor sit, amet 
                        consectetur adipisicing elit. Ab?</Link>
                    </h3>
                    <p className="post_body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Magni consequatur, qui facilis consectetur placeat ducimus nihil architecto ut.
                    </p>
                    <div className="post_autor">
                        <div className="post_avatar">
                            <img src="./images/avatar3.jpg"/>
                        </div>
                        <div className="info_autor">
                            <h5>By: Jonathan Joestar</h5>
                            <small>23, febrero, 2025 - 10:30</small>
                        </div>
                    </div>
                </div>
            </article>

            <article className="post">
                <div className="post_miniatura">
                    <img src="./images/blog15.jpg"/>
                </div>
                <div className="post_info">
                    <Link to="" className="categoria_button">vida salvaje</Link>
                    <h3 className="post_titulo"><Link to="post.html">Lorem ipsum dolor sit, amet 
                        consectetur adipisicing elit. Ab?</Link>
                    </h3>
                    <p className="post_body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Magni consequatur, qui facilis consectetur placeat ducimus nihil architecto ut.
                    </p>
                    <div className="post_autor">
                        <div className="post_avatar">
                            <img src="./images/avatar14.jpg"/>
                        </div>
                        <div className="info_autor">
                            <h5>By: Jonathan Joestar</h5>
                            <small>23, febrero, 2025 - 10:30</small>
                        </div>
                    </div>
                </div>
            </article>

            <article className="post">
                <div className="post_miniatura">
                    <img src="./images/blog10.jpg"/>
                </div>
                <div className="post_info">
                    <Link to="" className="categoria_button">vida salvaje</Link>
                    <h3 className="post_titulo"><Link to="post.html">Lorem ipsum dolor sit, amet 
                        consectetur adipisicing elit. Ab?</Link>
                    </h3>
                    <p className="post_body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Magni consequatur, qui facilis consectetur placeat ducimus nihil architecto ut.
                    </p>
                    <div className="post_autor">
                        <div className="post_avatar">
                            <img src="./images/avatar10.jpg"/>
                        </div>
                        <div className="info_autor">
                            <h5>By: Jonathan Joestar</h5>
                            <small>23, febrero, 2025 - 10:30</small>
                        </div>
                    </div>
                </div>
            </article>

            <article className="post">
                <div className="post_miniatura">
                    <img src="./images/blog28.jpg"/>
                </div>
                <div className="post_info">
                    <Link to="" className="categoria_button">vida salvaje</Link>
                    <h3 className="post_titulo"><Link to="post.html">Lorem ipsum dolor sit, amet 
                        consectetur adipisicing elit. Ab?</Link>
                    </h3>
                    <p className="post_body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Magni consequatur, qui facilis consectetur placeat ducimus nihil architecto ut.
                    </p>
                    <div className="post_autor">
                        <div className="post_avatar">
                            <img src="./images/avatar9.jpg"/>
                        </div>
                        <div className="info_autor">
                            <h5>By: Jonathan Joestar</h5>
                            <small>23, febrero, 2025 - 10:30</small>
                        </div>
                    </div>
                </div>
            </article>

            <article className="post">
                <div className="post_miniatura">
                    <img src="./images/blog36.jpg"/>
                </div>
                <div className="post_info">
                    <Link to="" className="categoria_button">vida salvaje</Link>
                    <h3 className="post_titulo"><Link to="post.html">Lorem ipsum dolor sit, amet 
                        consectetur adipisicing elit. Ab?</Link>
                    </h3>
                    <p className="post_body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Magni consequatur, qui facilis consectetur placeat ducimus nihil architecto ut.
                    </p>
                    <div className="post_autor">
                        <div className="post_avatar">
                            <img src="./images/avatar14.jpg"/>
                        </div>
                        <div className="info_autor">
                            <h5>By: Jonathan Joestar</h5>
                            <small>23, febrero, 2025 - 10:30</small>
                        </div>
                    </div>
                </div>
            </article>

            <article className="post">
                <div className="post_miniatura">
                    <img src="./images/blog4.jpg"/>
                </div>
                <div className="post_info">
                    <Link to="" className="categoria_button">vida salvaje</Link>
                    <h3 className="post_titulo"><Link to="post.html">Lorem ipsum dolor sit, amet 
                        consectetur adipisicing elit. Ab?</Link>
                    </h3>
                    <p className="post_body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Magni consequatur, qui facilis consectetur placeat ducimus nihil architecto ut.
                    </p>
                    <div className="post_autor">
                        <div className="post_avatar">
                            <img src="./images/avatar13.jpg"/>
                        </div>
                        <div className="info_autor">
                            <h5>By: Jonathan Joestar</h5>
                            <small>23, febrero, 2025 - 10:30</small>
                        </div>
                    </div>
                </div>
            </article>

            <article className="post">
                <div className="post_miniatura">
                    <img src="./images/blog48.jpg"/>
                </div>
                <div className="post_info">
                    <Link to="" className="categoria_button">vida salvaje</Link>
                    <h3 className="post_titulo"><Link to="post.html">Lorem ipsum dolor sit, amet 
                        consectetur adipisicing elit. Ab?</Link>
                    </h3>
                    <p className="post_body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Magni consequatur, qui facilis consectetur placeat ducimus nihil architecto ut.
                    </p>
                    <div className="post_autor">
                        <div className="post_avatar">
                            <img src="./images/avatar17.jpg"/>
                        </div>
                        <div className="info_autor">
                            <h5>By: Jonathan Joestar</h5>
                            <small>23, febrero, 2025 - 10:30</small>
                        </div>
                    </div>
                </div>
            </article>

            <article className="post">
                <div className="post_miniatura">
                    <img src="./images/blog38.jpg"/>
                </div>
                <div className="post_info">
                    <Link to="" className="categoria_button">vida salvaje</Link>
                    <h3 className="post_titulo"><Link to="post.html">Lorem ipsum dolor sit, amet 
                        consectetur adipisicing elit. Ab?</Link>
                    </h3>
                    <p className="post_body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Magni consequatur, qui facilis consectetur placeat ducimus nihil architecto ut.
                    </p>
                    <div className="post_autor">
                        <div className="post_avatar">
                            <img src="./images/avatar15.jpg"/>
                        </div>
                        <div className="info_autor">
                            <h5>By: Jonathan Joestar</h5>
                            <small>23, febrero, 2025 - 10:30</small>
                        </div>
                    </div>
                </div>
            </article>         
        </div>
    </section>
{/* <!-- END POST VARIADOS --> */}

{/* <!-- CATEGORIAS --> */}
    <section className="categorias_buttons">
        <div className="container categorias_container">
            <Link to="" className="categoria_button">arte</Link>
            <Link to="" className="categoria_button">vida salvaje</Link>
            <Link to="" className="categoria_button">viajes</Link>
            <Link to="" className="categoria_button">musica</Link>
            <Link to="" className="categoria_button">tecnologia</Link>
            <Link to="" className="categoria_button">musica</Link>
        </div>
    </section>
{/* <!-- END CATEGORIAS --> */}
<Piep/>
    </>
  )
}

export default courses
