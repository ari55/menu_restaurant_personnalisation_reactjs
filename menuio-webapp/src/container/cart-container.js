import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import CartItem from './cartItems'
const b = []
const baseUrl = 'https://menuio-app1.herokuapp.com/'
const base2 = 'https://cors-anywhere.herokuapp.com/'
class CartContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            products: [],
            total: 1,
            produit: {},
            serveur: [],
            nomserveur: '',
            noTable: null
        }
    }

    componentDidMount () {
        let a
        let qantite
        const cart = JSON.parse(localStorage.getItem('cart'))
        Object.entries(cart).map(function (key, val) {
            console.log(key[0])
            a = key[0]
            b.push(a)
            console.log(key[1])
            qantite = key[1]

            console.log(qantite)
        })

        for (let i = 0; i < b.length; i++) {
            console.log(b[i])
            const total = 0

            fetch((base2 + baseUrl + 'produit/' + b[i]), {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            })
                .then((res1) => res1.json())
                .then(res => {
                    const arrCards = []

                    arrCards.push(res)
                    this.setState(function () {
                        return {
                            products: arrCards
                        }
                    })
                }).catch((e) => console.log(`Error! ${e.message}`))
        }

        fetch(base2 + baseUrl + 'serveur', {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        })
            .then((res1) => res1.json())
            .then((response) => this.setState({
                serveur: response
            }))
        /// this.getdata(a)

        // let initialProducts = JSON.parse(JSON.parse(localStorage.getItem("products")));
        // console.log(cart)

        // for (let i = 0; i < localStorage.length; i++) {
        //     const key = localStorage.key(i)
        //     console.log(key)
        //     const item = JSON.parse(localStorage.getItem(key))
        //     console.log(item.key)
        // }
        // this.setState({
        //     products: cart
        // })
        // console.log(cart.length)
        // Object.entries(cart).map(function (keyName, keyIndex) {
        //     console.log(keyIndex)
        // })
        // const arrayx = []
        // console.log(Object.keys(cart))
        // arrayx.push(Object.keys(cart))
        // console.log(Number.parseInt(arrayx[1]))

        // if (!cart) return
        // getCartProducts(cart).then((products) => {
        //     let total = 0
        //     for (var i = 0; i < products.length; i++) {
        //         total += products[i].price * products[i].qty
        //     }
        //     this.setState({ products, total })
        // })
    }

    // getdata (params) {
    //

    // }

removeFromCart = (product) => {
    const products = this.state.products.filter((item) => item.id !== product.id)
    const cart = JSON.parse(localStorage.getItem('cart'))
    delete cart[product.id.toString()]
    localStorage.setItem('cart', JSON.stringify(cart))
    const total = this.state.total - (product.qty * product.price)
    this.setState({ products, total })
    window.location.reload()
}

getServeur (e) {
    console.log(e.target.value)
    this.setState({ nomserveur: e.target.value })
}

getNodeTable (e) {
    console.log(e.target.value)
    this.setState({ noTable: e.target.value })
}

clearCart = () => {
    localStorage.removeItem('cart')
    this.setState({ products: [] })
}

render () {
    // localStorage.clear()

    console.log(b)
    console.log(this.state.serveur)

    const { products, serveur, total } = this.state
    return (
        <div className=' container'>
            <h3 className='card-title'>Cart</h3>
            <hr />
            {
                products.map((product, index) => <CartItem product={product} serveur={serveur} remove={this.removeFromCart} key={index} />)
            }
            <hr />
            {products.length ? <div><h4><small>Montant Total:</small><span className='float-right text-primary'>${total}</span></h4><hr /></div> : ''}

            {!products.length ? <h3 className='text-warning'>No item on the cart</h3> : ''}
            {products.length
                ? <div>
                    <label> Veuillez selectionner un serveur</label>
                    <select onChange={this.getServeur}>
                        <option selected='true' disabled='disabled'> </option>
                        {serveur.map((serveur, index) => <option key={index} value={serveur.nom}>{serveur.nom + ' ' + serveur.prenom}</option>)}
                    </select>
                    <div> <label> Veuillez entrer le numero de votre table</label>
                        <input type='number' onChange={this.getNodeTable} required />
                    </div>
                </div> : ''}

            <Link to='/checkout'><button className='btn btn-success float-right'>Checkout</button></Link>
            <button className='btn btn-danger float-right' onClick={this.clearCart} style={{ marginRight: '10px' }}>Clear Cart</button>
            <br /><br /><br />
        </div>)
}
}

export default CartContainer
