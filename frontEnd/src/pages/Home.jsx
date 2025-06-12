import React from 'react'
import Navbar from "../layout/Navbar";
import Piep from "../layout/PieP";
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
    <Navbar/>
    {/*<!-- HEADER -->*/}
    <header>
        <div className="container header_container">
            <div className="header_izquerda">
                <h1>Encuentra las respuestas a todas tus preguntas</h1>{/* <!-- pendiente cambiar el eslogan o el titulo --> */}
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt reprehenderit rerum aspernatur. 
                    Impedit cumque quae ipsam repellat aut, quaerat accusantium quo veritatis consectetur animi. Impedit dicta ab totam fuga laudantium!
                </p>
                <Link to="/cursos" className="btn btn-primary">iniciar</Link>{/* <!-- el btn es para convertir esta linea en un boton para que te cambie otra pagina --> */}
            </div>

            <div className="header_derecha">{/* <!-- pendiente si tiene que ser en image o imagen --> */}
                <div className="header_derecha-imagen">    
                    <img src="/images/header.svg"/>
                </div>
            </div>
        </div>
    </header>
{/* <!-- END Header --> */}

{/* <!-- categorias --> */}
    <section className="categorias">
        <div className="container categorias_container">{/* <!-- contenedor --> */}
            <div className="categorias_izquierda">
                <h1>categorias</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, possimus qui totam, cumque, 
                    excepturi iusto voluptate voluptatem quasi impedit quia eaque voluptas. Beatae minus praesentium itaque molestiae vero, repudiandae distinctio.
                </p>
                <a href="#" className="btn">buscar mas</a>
            </div>
            {/* <!-- informacion de la categoria individual, cada uno de estos article es un cuadro de las clases --> */}
            <div className="categorias_derecha">

                <article className="categoria">
                    <span className="categoria_icono"><i className="bi bi-brush"></i></span>
                    <h5>Artes graficas y diseño</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, in?</p>
                </article>
                
                <article className="categoria">
                    <span className="categoria_icono"><i className="bi bi-cart4"></i></span>
                    <h5>Marketing digital</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, in?</p>
                </article>

                <article className="categoria">
                    <span className="categoria_icono"><i className="bi bi-pencil"></i></span>
                    <h5>Escritura y traduccion</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, in?</p>
                </article>

                <article className="categoria">
                    <span className="categoria_icono"><i className="bi bi-film"></i></span>
                    <h5>Video y animacion</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, in?</p>
                </article>

                <article className="categoria">
                    <span className="categoria_icono"><i className="bi bi-music-note-beamed"></i></span>
                    <h5>Musica y audio</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, in?</p>
                </article>

            </div>
        </div>
    </section>
{/* <!-- END CATEGORIAS --> */}

{/* <!-- CURSOS --> */}
    <section className="cursos">
        <h2>Cursos Populares</h2>
        <div className="container cursos_container">
            <article className="curso">
                <div className="curso_imagen">
                    <img src="./images/course1.jpg"/>
                </div>
                <div className="curso_info">
                    <h4>Web social responsivo con desarrollo UI</h4>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Quae vel rem assumenda, esse quo earum tempora.
                    </p>
                    <a href="courses.html" className="btn btn-primary">Busca mas</a>
                </div>
            </article>

            <article className="curso">
                <div className="curso_imagen">
                    <img src="./images/course2.jpg"/>
                </div>
                <div className="curso_info">
                    <h4>App para telefono responsivo con desarrollo UI</h4>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Quae vel rem assumenda, esse quo earum tempora.
                    </p>
                    <a href="courses.html" className="btn btn-primary">Busca mas</a>
                </div>
            </article>

            <article className="curso">
                <div className="curso_imagen">
                    <img src="./images/course3.jpg"/>
                </div>
                <div className="curso_info">
                    <h4>Delivery responsivo con desarrollo UI</h4>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Quae vel rem assumenda, esse quo earum tempora.
                    </p>
                    <a href="courses.html" className="btn btn-primary">Busca mas</a>
                </div>
            </article>

        </div>
    </section>
{/* <!-- END CURSOS --> */}

{/* <!-- TESTIMONIOS --> */}
    <section className="container testimonios_container mySwiper">
        <h2>Testimonios de estudiantes</h2>
        <div className="swiper-wrapper">
            <article className="testimonios swiper-slide">
                <div className="avatar">
                    <img src="./images/avatar1.jpg"/>
                </div>
                <div className="testimonio_info">
                    <h5>Dayana Marta</h5>
                    <small>Estudiante</small>
                </div>
                <div className="testimonio_body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ducimus culpa tempore quam voluptates
                        suscipit quisquam officiis quas consectetur praesentium eos provident quaerat cum voluptatum 
                        repellat accusantium perferendis, consequuntur sunt?
                    </p>
                </div>
            </article>

            <article className="testimonios swiper-slide">
                <div className="avatar">
                    <img src="./images/avatar2.jpg"/>
                </div>
                <div className="testimonio_info">
                    <h5>Dewey </h5>
                    <small>Estudiante</small>
                </div>
                <div className="testimonio_body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ducimus culpa tempore quam voluptates
                        suscipit quisquam officiis quas consectetur praesentium eos provident quaerat cum voluptatum 
                        repellat accusantium perferendis, consequuntur sunt?
                    </p>
                </div>
            </article>

            <article className="testimonios swiper-slide">
                <div className="avatar">
                    <img src="./images/avatar3.jpg"/>
                </div>
                <div className="testimonio_info">
                    <h5>Rogelio</h5>
                    <small>Estudiante</small>
                </div>
                <div className="testimonio_body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ducimus culpa tempore quam voluptates
                        suscipit quisquam officiis quas consectetur praesentium eos provident quaerat cum voluptatum 
                        repellat accusantium perferendis, consequuntur sunt?
                    </p>
                </div>
            </article>

            <article className="testimonios swiper-slide">
                <div className="avatar">
                    <img src="./images/avatar4.jpg"/>
                </div>
                <div className="testimonio_info">
                    <h5>Muhamed</h5>
                    <small>Estudiante</small>
                </div>
                <div className="testimonio_body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ducimus culpa tempore quam voluptates
                        suscipit quisquam officiis quas consectetur praesentium eos provident quaerat cum voluptatum 
                        repellat accusantium perferendis, consequuntur sunt?
                    </p>
                </div>
            </article>

            <article className="testimonios swiper-slide">
                <div className="avatar">
                    <img src="./images/avatar5.jpg"/>
                </div>
                <div className="testimonio_info">
                    <h5>Luna Lunera</h5>
                    <small>Estudiante</small>
                </div>
                <div className="testimonio_body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ducimus culpa tempore quam voluptates
                        suscipit quisquam officiis quas consectetur praesentium eos provident quaerat cum voluptatum 
                        repellat accusantium perferendis, consequuntur sunt?
                    </p>
                </div>
            </article>

            <article className="testimonios swiper-slide">
                <div className="avatar">
                    <img src="./images/avatar6.jpg"/>
                </div>
                <div className="testimonio_info">
                    <h5>Jean Doe</h5>
                    <small>Estudiante</small>
                </div>
                <div className="testimonio_body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ducimus culpa tempore quam voluptates
                        suscipit quisquam officiis quas consectetur praesentium eos provident quaerat cum voluptatum 
                        repellat accusantium perferendis, consequuntur sunt?
                    </p>
                </div>
            </article>

            <article className="testimonios swiper-slide">
                <div className="avatar">
                    <img src="./images/avatar7.jpg"/>
                </div>
                <div className="testimonio_info">
                    <h5>Sandra</h5>
                    <small>Estudiante</small>
                </div>
                <div className="testimonio_body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ducimus culpa tempore quam voluptates
                        suscipit quisquam officiis quas consectetur praesentium eos provident quaerat cum voluptatum 
                        repellat accusantium perferendis, consequuntur sunt?
                    </p>
                </div>
            </article>
        </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
    </section>
{/* <!-- END TESTIMONIOS --> */}

{/* <!-- preguntas frecuentes --> */}
    <section className="faqs">
        <h2>PREGUNTAS FRECUENTES</h2>
        <div className="container faqs_container">
            <article className="faq">
                <div className="faq_icon"><i className="bi bi-plus"></i></div>
                <div className="question_respuesta">
                    <h4>Como se cual es el curso correcto para mi?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit atque esse porro,
                        excepturi beatae reiciendis culpa? Labore inventore quasi neque.
                    </p>
                </div>
            </article>

            <article className="faq">
                <div className="faq_icon"><i className="bi bi-plus"></i></div>
                <div className="question_respuesta">
                    <h4>Como se cual es el curso correcto para mi?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit atque esse porro,
                        excepturi beatae reiciendis culpa? Labore inventore quasi neque.
                    </p>
                </div>
            </article>

            <article className="faq">
                <div className="faq_icon"><i className="bi bi-plus"></i></div>
                <div className="question_respuesta">
                    <h4>Como se cual es el curso correcto para mi?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit atque esse porro,
                        excepturi beatae reiciendis culpa? Labore inventore quasi neque.
                    </p>
                </div>
            </article>

            <article className="faq">
                <div className="faq_icon"><i className="bi bi-plus"></i></div>
                <div className="question_respuesta">
                    <h4>Como se cual es el curso correcto para mi?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit atque esse porro,
                        excepturi beatae reiciendis culpa? Labore inventore quasi neque.
                    </p>
                </div>
            </article>

            <article className="faq">
                <div className="faq_icon"><i className="bi bi-plus"></i></div>
                <div className="question_respuesta">
                    <h4>Como se cual es el curso correcto para mi?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit atque esse porro,
                        excepturi beatae reiciendis culpa? Labore inventore quasi neque.
                    </p>
                </div>
            </article>

            <article className="faq">
                <div className="faq_icon"><i className="bi bi-plus"></i></div>
                <div className="question_respuesta">
                    <h4>Como se cual es el curso correcto para mi?</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit atque esse porro,
                        excepturi beatae reiciendis culpa? Labore inventore quasi neque.
                    </p>
                </div>
            </article>
        </div>
    </section>
{/* <!-- END PREGUNTAS FRECUENTES --> */}
    <Piep/>
    </>
  )
}

export default Home
