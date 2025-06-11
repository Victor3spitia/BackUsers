import React from 'react'
import DefaultLayout from './../layout/DefaultLayout';
import Piep from "../layout/PieP";

function add_post() {
  return (
    <>
    <DefaultLayout/>
    <section className="form_section">
    <div className="container section_container">
        <h2>Añadir Post</h2>
        <div className="alerta_mensaje error">
            <p>Error en registrar</p>
        </div>
        <form action="" enctype="multipart/form-data">
            <input type="text" placeholder="Titulo"/>
            <select>
                <option value="1">Viajes</option>
                <option value="1">Arte</option>
                <option value="1">tecnologia</option>
                <option value="1">Musica</option>
            </select>
            <textarea rows="10" placeholder="body"></textarea>
            <div className="form_control inline">
                <input type="checkbox" id="is_featured"/>
                <label for="is_featured" checked>Featured</label>
            </div>
            <div className="form_control">
                <label for="miniatura">Añadir miniatura</label>
                <input type="file" id="miniatura"/>
            </div>
            <button type="submit" className="btn">Añadir Post</button>
        </form>
    </div>
</section>
    <Piep/>
    </>
  )
}

export default add_post
