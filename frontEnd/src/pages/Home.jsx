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
                    un lugar donde puedes encontrar cursos de todo tipo,
                    desde programacion hasta diseño grafico, desde musica hasta escritura.
                    un lugar donde puedes aprender de los mejores profesores
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
            </div>
            {/* <!-- informacion de la categoria individual, cada uno de estos article es un cuadro de las clases --> */}
            <div className="categorias_derecha">

                <article className="categoria">
                    <span className="categoria_icono"><i className="bi bi-brush"></i></span>
                    <h5>Artes graficas y diseño</h5>
                </article>
                
                <article className="categoria">
                    <span className="categoria_icono"><i className="bi bi-cart4"></i></span>
                    <h5>Marketing digital</h5>
                    
                </article>

                <article className="categoria">
                    <span className="categoria_icono"><i className="bi bi-pencil"></i></span>
                    <h5>Escritura y traduccion</h5>
                    
                </article>

                <article className="categoria">
                    <span className="categoria_icono"><i className="bi bi-film"></i></span>
                    <h5>Video y animacion</h5>
                    
                </article>

                <article className="categoria">
                    <span className="categoria_icono"><i className="bi bi-music-note-beamed"></i></span>
                    <h5>Musica y audio</h5>
                    
                </article>
                <article className="categoria">
                    <span className="categoria_icono"><i className="bi bi-music-note-beamed"></i></span>
                    <h5>programacion y desarrollo</h5>
                    
                </article>
                
                {/* <a href="#" className="btn">buscar mas</a> */}
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
                        Nuestra agencia desarrollará software completo y aplicaciones web.
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
                        Seré tu desarrollador de software y aplicaciones web.
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
                        Desarrollador de aplicaciones web y software con aplicaciones delyvery
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
                        Es buena la plataforma me gusta su contenido, estuve unos ocho meses y obtuve muchos certificados
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
                        los cursos están muy bien, con profesores altamente cualificados y un 
                        servicio de soporte que verdaderamente se ocupa de proveer toda la asistencia que el estudiante pueda necesitar
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
                        Los instructores son expertos y las lecciones son muy interactivas. 
                        ¡He aprendido más en unos meses aquí que en años por mi cuenta
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
                        Empecé a estudiar en esta plataforma, y tiene una manera de enseñar muy buena. 
                        Hablo desde la escuela de programación, que contiene los mejores cursos de la 
                        Plataforma junto a los de habilidades blandas
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
                        Me ha cambiado la vida para bien. Aprendí marketing digital y ahora me dedico a esto, 
                        superando por mucho mis ingresos como contadora
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
                    <h4>¿Que es Expertrix?</h4>
                    <p>
                        Expertrix es una plataforma de educación online con más de 1900 cursos y trabajos en áreas como desarrollo, IA, diseño, marketing, negocios, audiovisual e inglés. 
                        Ofrece rutas de aprendizaje y certificaciones para fortalecer tu perfil profesional.
                    </p>
                </div>
            </article>

            <article className="faq">
                <div className="faq_icon"><i className="bi bi-plus"></i></div>
                <div className="question_respuesta">
                    <h4>¿Que necesito para tomar los cursos?</h4>
                    <p>
                        Solo necesitas conexión a Internet y un dispositivo con navegador web o la app de Platzi (Android 5+ o iOS 13+). 
                        Si tienes un plan anual (Expert, Expert Duo o Expert Family), puedes descargar clases desde la app para verlas offline.
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
                    <h4>¿Cuales son los medios de pago para pagar mi suscripcion?</h4>
                    <p>
                        Tarjeta de crédito/débito (Visa, MasterCard, AMEX), PayPal, PSE, Bitcoin, pagos en efectivo, Google Pay y Apple Pay.
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
