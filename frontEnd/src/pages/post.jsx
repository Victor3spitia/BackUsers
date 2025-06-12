import React from 'react'
import Navbar from "../layout/Navbar";
import Piep from "../layout/PieP";

function post() {
  return (
    <>
    <Navbar/>
    <section class="singlepost">
        <div class="container singlepost_container">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, eligendi?</h2>
            <div class="post_autor">
            <div class="post_avatar">
                <img src="./images/avatar2.jpg"/>
            </div>
            <div class="post_info">
                <h5>By: Marily manson</h5>
                <small>20, Enero, 2025 - 07:49</small> {/* <!-- fecha --> */}
            </div>
            </div>
            <div class="singlepost_miniatura">
                <img src="./images/blog33.jpg"/>
            </div>
            <p> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt 
                est voluptate blanditiis modi provident commodi, accusantium expedita maiores 
                corporis quibusdam architecto mollitia praesentium quae officiis 
                inventore voluptas atque nemo assumenda.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt 
                est voluptate blanditiis modi provident commodi, accusantium expedita maiores 
                corporis quibusdam architecto mollitia praesentium quae officiis 
                inventore voluptas atque nemo assumenda.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt 
                est voluptate blanditiis modi provident commodi, accusantium expedita maiores 
                corporis quibusdam architecto mollitia praesentium quae officiis 
                inventore voluptas atque nemo assumenda.
            </p>
        </div>
    </section>
    <Piep/>
    </>
  )
}

export default post
