import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Piep from "../layout/PieP";


function courses() {
  return (
    <>
    <Navbar/>
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
                    <Link to="" className="categoria_button">tecnologia</Link>
                    <h3 className="post_titulo"><Link to="post.html">Encontraré información útil en sus datos y le brindaré recomendaciones.</Link>
                    </h3>
                    <p className="post_body">
                        Profesional con amplia experiencia en inteligencia empresarial (BI) con más de 15 años de experiencia en minería de datos, consultoría y soluciones de BI.
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
                    <Link to="" className="categoria_button">robotica</Link>
                    <h3 className="post_titulo"><Link to="post.html">Desarrollaré aplicaciones móviles nativas de reacción.</Link>
                    </h3>
                    <p className="post_body">
                        Un fragmento de código no es solo código, me aseguro de que haga lo que debe y lo entreguemos de la mejor manera.
                    </p>
                    <div className="post_autor">
                        <div className="post_avatar">
                            <img src="./images/avatar4.jpg"/>
                        </div>
                        <div className="info_autor">
                            <h5>By: Angeli Escobar</h5>
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
                    <Link to="" className="categoria_button">cine</Link>
                    <h3 className="post_titulo"><Link to="post.html">Transformaré tu historia o documental con tomas de drones de videografía cinematográfica y más.</Link>
                    </h3>
                    <p className="post_body">
                        ¿Buscas un videógrafo, cinematógrafo y operador de drones experto para dar vida a tu proyecto? Ya sea una boda, un anuncio o una película cinematográfica
                    </p>
                    <div className="post_autor">
                        <div className="post_avatar">
                            <img src="./images/avatar10.jpg"/>
                        </div>
                        <div className="info_autor">
                            <h5>By: Maria Magdalena</h5>
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
                    <Link to="" className="categoria_button">reposteria</Link>
                    <h3 className="post_titulo"><Link to="post.html">Crearé videos de recetas de comida, reels, facebook, instagram, tiktok.</Link>
                    </h3>
                    <p className="post_body">
                        ¿Quieres que tus recetas cobren vida en la pantalla? ¡No busques más, yo te ayudaré!
                    </p>
                    <div className="post_autor">
                        <div className="post_avatar">
                            <img src="./images/avatar9.jpg"/>
                        </div>
                        <div className="info_autor">
                            <h5>By: Moli Torres</h5>
                            <small>23, febrero, 2025 - 10:30</small>
                        </div>
                    </div>
                </div>
            </article>

            <article className="post">
                <div className="post_miniatura">
                    <img src="./images/course9.jpg"/>
                </div>
                <div className="post_info">
                    <Link to="" className="categoria_button">cine</Link>
                    <h3 className="post_titulo"><Link to="post.html">Haré un curso en línea y un video de capacitación para cualquier plataforma.</Link>
                    </h3>
                    <p className="post_body">
                        ¡Estás en el lugar correcto! Mi nombre es Zen, soy un creador de cursos en línea profesional con más de 4 años de experiencia y ya he realizado más de 150 proyectos relacionados con el aprendizaje de cursos en línea.
                    </p>
                    <div className="post_autor">
                        <div className="post_avatar">
                            <img src="./images/avatar11.jpg"/>
                        </div>
                        <div className="info_autor">
                            <h5>By: Joseph Joestar</h5>
                            <small>23, febrero, 2025 - 10:30</small>
                        </div>
                    </div>
                </div>
            </article>

            <article className="post">
                <div className="post_miniatura">
                    <img src="./images/blog34.jpg"/>
                </div>
                <div className="post_info">
                    <Link to="" className="categoria_button">cocina</Link>
                    <h3 className="post_titulo"><Link to="post.html">Seré nutricionista certificado para dietas y planes de alimentación personalizados para bajar de peso.</Link>
                    </h3>
                    <p className="post_body">
                        Nutricionista senior en una clínica de alimentación digital. Con más de 8 años de experiencia , me especializo en educación nutricional, planificación de comidas y cambios de estilo de vida.
                    </p>
                    <div className="post_autor">
                        <div className="post_avatar">
                            <img src="./images/avatar8.jpg"/>
                        </div>
                        <div className="info_autor">
                            <h5>By: Rogelio Santos</h5>
                            <small>23, febrero, 2025 - 10:30</small>
                        </div>
                    </div>
                </div>
            </article>

            <article className="post">
                <div className="post_miniatura">
                    <img src="./images/blog102.jpg"/>
                </div>
                <div className="post_info">
                    <Link to="" className="categoria_button">videojuegos</Link>
                    <h3 className="post_titulo"><Link to="post.html">Realizaré cualquier prototipo de juego en Unreal Engine usando planos.</Link>
                    </h3>
                    <p className="post_body">
                        ¿Buscas un juego a medida desarrollado con Unreal Engine? Me especializo en crear juegos únicos a pequeña escala, adaptados a tus ideas y requisitos
                    </p>
                    <div className="post_autor">
                        <div className="post_avatar">
                            <img src="./images/avatar2.jpg"/>
                        </div>
                        <div className="info_autor">
                            <h5>By: Jotaro Kujo</h5>
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
                    <Link to="" className="categoria_button">musica</Link>
                    <h3 className="post_titulo"><Link to="post.html">Grabaré una sabrosa guitarra acústica o eléctrica profesional.</Link>
                    </h3>
                    <p className="post_body">
                        He trabajado con artistas de todo el mundo, creando pistas de guitarra únicas que elevan sus canciones. 
                    </p>
                    <div className="post_autor">
                        <div className="post_avatar">
                            <img src="./images/avatar15.jpg"/>
                        </div>
                        <div className="info_autor">
                            <h5>By: Josuke Higashikata</h5>
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
