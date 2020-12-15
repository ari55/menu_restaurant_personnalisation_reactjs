import React from 'react'

const CartItemComponent = ({ image, id, className, nom, prix, quantite, count, removeItem, diminuerQuatity, augmenterQuatity }) => (
    <div className='itemCart' id={id}>
        <img src={image} className='imgCart' />
        <span className='itemNameCart'>{nom}</span>
        <div className='addmoins'><button className='buttonmoins' onClick={() => diminuerQuatity({ quantite })}>-</button><span id='qte'>{count}</span><button className='buttonplus' onClick={() => augmenterQuatity({ quantite })}>+</button></div>
        <span className='price'>{prix}</span>
        <button className='removebuton' onClick={() => removeItem({ id, image, nom, prix, units: 1 })}>Retirer</button>
        <hr />
    </div>
)

export default CartItemComponent
