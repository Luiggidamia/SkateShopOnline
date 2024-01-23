import React from 'react';
import './ItemDetail.css';


const ItemDetail = ({id, nombre, precio, img, descripcion}) => {
  return (
    <div className='contenedorItem'>
      <img className='imgDetail' src={img} alt={nombre} />
      <h2>{nombre}</h2>
      <h3>Precio: {precio} Usd</h3>
      <p>ID: {id} </p>
      <p>{descripcion}</p>
      
    </div>
  )
}

export default ItemDetail

