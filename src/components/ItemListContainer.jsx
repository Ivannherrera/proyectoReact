import React from 'react'

export const ItemListContainer = ({greeting}) => {
  return (
    <div className='productos'>
        <p>{greeting}</p>
        <p>Aca se veran nuestros productos</p>
    </div>
  )
}
