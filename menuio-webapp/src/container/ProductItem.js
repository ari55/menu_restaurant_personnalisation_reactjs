import React from 'react'

export default class ProductItem extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            quantity: 1
        }
    }

handleInputChange = event => this.setState({ [event.target.name]: event.target.value })

addToCart = () => {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {}
    const id = this.props.product.id
    cart[id] = (cart[id] ? cart[id] : 0)
    const qty = cart[id] + parseInt(this.state.quantity)
    cart[id] = qty

    localStorage.setItem('cart', JSON.stringify(cart))
}

render () {
    const { product } = this.props
    return (
        <div className='card' style={{ marginBottom: '10px' }}>
            <div className='card-body'>
                <h4 className='card-title'>{product.nomm}</h4>
                <p className='card-text'>{product.description}</p>
                <h5 className='card-text'><small>price: </small>${product.prix}</h5>
                <span className='card-text'><small>Available Quantity: </small>{product.available_quantity}</span>

                <div>
                    <button className='btn btn-sm btn-warning float-right' onClick={this.addToCart}>Add to cart</button>
                    <input type='number' value={this.state.quantity} name='quantity' onChange={this.handleInputChange} className='float-right' style={{ width: '60px', marginRight: '10px', borderRadius: '3px' }} />
                </div>

            </div>
        </div>
    )
}
}
