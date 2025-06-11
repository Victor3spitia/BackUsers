import React from 'react'
import DefaultLayout from "../layout/DefaultLayout";
import Piep from "../layout/PieP";

function edit_user() {
  return (
    <>
    <DefaultLayout/>
      <section class="form_section">
    <div class="container section_container">
        <h2>Editar Usuario</h2>
        <form action="" enctype="multipart/form-data">
            <input type="text" placeholder="Nombre"/>
            <input type="text" placeholder="Apellido"/>
           
            <select>
                <option value="0">Autor</option>
                <option value="1">Admin</option>
            </select>
            <button type="submit" class="btn">Editar Usuario</button>
            
        </form>
    </div>
</section>
    <Piep/>
    </>
  )
}

export default edit_user
