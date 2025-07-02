import React from 'react'
//import logo from "../assets/expertrix.png";
import '../assets/sidebar.css';
import { Link } from 'react-router-dom'

function sidebar() {
return (
    <>

<body>
    <aside className='sidebar'>
        <ul className='sidebar_lista'>
                {/* <img src={logo} className='sidebar_icon sidebar_icon-logo'/> */}
            <li className='sidebar_element'>
                <i class="bi bi-house-door"></i>
                <div className='sidebar_hide'>
                    <Link to="/dashboard" ></Link>
                    <p className='sidebar_text'>dashboard</p>
                </div>
            </li>

            <li className='sidebar_element'>
                <i className="bi bi-pen"></i>
                <div className='sidebar_hide'>
                    <Link to="/addPost" ></Link>
                    <p className='sidebar_text'>nuevo post</p>
                </div>
            </li>

            <li className='sidebar_element'>
                <i className="bi bi-postcard"></i>
                <div className='sidebar_hide'>
                    <Link to="/editPost" ></Link>
                    <p className='sidebar_text'>editar post</p>
                </div>
            </li>

            <li className='sidebar_element'>
                <i className="bi bi-person-gear"></i>
                <div className='sidebar_hide'>
                    <Link to="/editUser" ></Link>
                    <p className='sidebar_text'>editar cuenta</p>
                </div>
            </li>

            <li className="sidebar_element sidebar_element-avatar">
                <img src="../public/images/avatar8.jpg" className='sidebar_icon sidebar_icon-avatar'/>
                <div className='sidebar_hide'>
                    <h3 className='sidebar-title'>jonathan</h3>
                    <p className='sidebar_info'>Empleado</p>
                </div>

            </li>

        </ul>
    </aside>
</body>




    </>
)
}

export default sidebar
