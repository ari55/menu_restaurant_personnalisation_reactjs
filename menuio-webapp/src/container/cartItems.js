import React from 'react'

export default class CartItem extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            quantity: 1
        }
    }

    render () {
        const { product } = this.props
        return (
            <div className='card' style={{ marginBottom: '10px' }}>
                <div className='card-body'>
                    <div>
                        <img src={product.url_image} alt='' style={{ width: '10%' }} className='' />

                    </div>
                    <h4 className='card-title'>{product.nom}</h4>
                    <h5 className='card-text'><small>price: </small>${product.prix}</h5>
                    <span className='card-text text-success'><small>Quantity: </small></span>
                    <button className='btn btn-sm btn-warning float-right' onClick={() => this.props.remove(product)}>Remove from cart</button>

                </div>
            </div>
        )
    }
}
