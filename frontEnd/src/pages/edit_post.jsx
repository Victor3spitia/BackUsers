import React from 'react'

function edit_post() {
  return (
    <>
    <section className="form_section">
    <div className="container section_container">
        <h2>Editar Post</h2>
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
                <label for="miniatura">Cambiar miniatura</label>
                <input type="file" id="miniatura"/>
            </div>
            <button type="submit" className="btn">Editar Post</button>
        </form>
    </div>
</section>
    </>
  )
}

export default edit_post
