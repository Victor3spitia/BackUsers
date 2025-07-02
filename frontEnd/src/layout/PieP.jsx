import React from 'react'

function Footer() {
  return (
    <>
    <div>
      <footer>
        <div className="container footer_container">
        
            <div className="footer_3">
                <h4>politicas</h4>
                <ul className="politicas">
                    <li><a href="#">Politicas de privacidad</a></li>
                    <li><a href="#">Terminos y condiciones</a></li>
                    <li><a href="#">Politicas de privacidad</a></li>
                </ul>
            </div>

            <div className="footeer_4">
                <h4>Contactos</h4>
                <div>
                    <p>+54 434 819 5736</p>
                    <p>ejemplo@example.com</p>
                </div>
                <ul className="footer_redesSociales">
                    <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                    <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                    <li><a href="#"><i className="bi bi-twitter-x"></i></a></li>
                    <li><a href="#"><i className="bi bi-youtube"></i></a></li>
                </ul>
            </div>
        </div>         
            <div className="footer_copyright">
                <small>Copyright &copy; Expertrix</small>
            </div>
    </footer>
    </div>
    </>
  )
}

export default Footer

