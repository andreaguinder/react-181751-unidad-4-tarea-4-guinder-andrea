
import React from "react";

function Tarjeta( {nombre, profesion, imagen, descripcion} ) {


  return (

      <div className='tarjeta'>
        <h2>{nombre}</h2>
        <img src={imagen} alt={nombre} />
        <h3>{profesion}</h3>
        <p>{descripcion}</p>
      </div>

  )
}

export default Tarjeta