import React, { Component, useContext } from 'react'
import { Link } from 'react-router-dom'
import HeaderAppContainer from '../container/header-app-container'
import '../css/modificationTstandard.css'
import ModifUnFInalComponent from '../component/modif-un-final-component'
// import CartContext from '../contexts/CartContext'
const baseUrl = 'https://menuio-app1.herokuapp.com/'
const base2 = 'https://cors-anywhere.herokuapp.com/'
class ModifUnFinalContainer extends React.Component {
    // static contextType = CartContext

    constructor (props) {
        super(props)
        this.state = {
            categories: [],
            produitsByResto: [],
            styleMenu: [],
            id_menu: '1',
            idtemplate: '1',
            idCtegorie: '',
            nomCtegorie: '',
            id: '',
            couleur_titre_navigation: '',
            couleur_titre_categorie: '',
            couleur_titre_produits: '',
            couleur_titre_logo: '',
            couleur_background_logo: ' ',
            couleur_background_header: '',
            couleur_background_footer: '',
            couleur_background_template: '',
            couleur_boutons: '',
            url_image_logo: null,
            url_image_menu: null,
            color: [],
            colorB: [],
            quantity: 1,
            cart: [],
            cartprod: [],
            cartSubTotal: 0,
            cartTax: 0,
            cartTotal: 0,
            countcartitem: 0,
            successAdd: false,
            proprio: localStorage.getItem('prenom')

        }
        // getItem
        this.getItem = this.getItem.bind(this)
        this.countCart = this.countCart.bind(this)

        this.addToCart = this.addToCart.bind(this)
        this.onhandleDeleteCategorie = this.onhandleDeleteCategorie.bind(this)
        this.onhandleDeleteProduit = this.onhandleDeleteProduit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange (event) {
        this.setState({ [event.target.name]: event.target.value })
    }

     addToCart = (product) => {
         const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {}
         // this.state.cartprod.push(product)
         const id = product.id
         // console.log(product)
         // cart[id] = product.id
         // cart.push(product)
         cart[id] = (cart[id] ? cart[id] : 0)
         const qty = cart[id] + parseInt(this.state.quantity)
         cart[id] = qty
         // cart[0] = idproduct
         // cart[0] = (cart[0] ? cart[0] : 0)

         localStorage.setItem('cart', JSON.stringify(cart))
         this.setState({
             successAdd: true,
             countcartitem: this.state.countcartitem * 1
         })
     }

     componentDidMount () {
         console.log('allo')
         //  const addProduct = this.context

         Promise.all([
             fetch(base2 + baseUrl + 'categorie', {
                 'Content-Type': 'application/json',
                 Accept: 'application/json'
             }),
             fetch((base2 + baseUrl + 'produits/' + this.state.id_menu), {
                 'Content-Type': 'application/json',
                 Accept: 'application/json'
             }),
             fetch((base2 + baseUrl + 'stylemenu/' + this.state.idtemplate), {
                 'Content-Type': 'application/json',
                 Accept: 'application/json'
             })
         ]

         )
             .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
             .then(([data1, data2, data3]) => this.setState({
                 categories: data1,
                 produitsByResto: data2,
                 styleMenu: data3

             }))
     }

     OnHandleSave (e) {
         console.log(e.target.value)
         this.setState({ categorie: e.target.value })
     }

     getItem = (id) => {
         const product = this.state.produitsByResto.find(item => item.id === id)
         return product
     };

     countCart () {
         if (this.state.successAdd) {
             this.setState({
                 countcartitem: this.state.countcartitem + 1
             })
         }
     }

     onhandleDeleteCategorie = (id) => {
         console.log(id)
         fetch(base2 + baseUrl + 'categorie/' + id, {
             method: 'DELETE',
             'Content-Type': 'application/json',
             Accept: 'application/json'

         })
             .then((response) => response.json())
             .then((response) => this.setState({ categories: response }))
             .then(window.location.reload())
     }

     onhandleDeleteProduit (id) {
         console.log(id)
         fetch(base2 + baseUrl + ' produits/' + id, {
             method: 'DELETE',
             'Content-Type': 'application/json',
             Accept: 'application/json'

         })
             .then((response) => response.json())
         //  .then((response) => console.log(response))
             .then((response) => this.setState({ produitsByResto: response }))
         // .then(window.location.reload())
     }

     render () {
         // localStorage.clear()
         // const { produits } = this.props

         console.log(this.state.styleMenu)
         // const { addProduct } = this.context.addProduct()

         // const isInCart = product => {
         // return !!cartItems.find(item => item.id === product.id)
         // }
         // console.log(addProduct)

         if (this.state.styleMenu[0]) {
             console.log('vrai')
             this.state.couleur_titre_navigation = this.state.styleMenu[0].couleur_titre_navigation
             this.state.couleur_titre_categorie = this.state.styleMenu[0].couleur_titre_categorie
             this.state.couleur_titre_produits = this.state.styleMenu[0].couleur_titre_produits
             this.state.couleur_titre_logo = this.state.styleMenu[0].couleur_titre_logo
             this.state.couleur_background_logo = this.state.styleMenu[0].couleur_background_logo
             this.state.couleur_background_header = this.state.styleMenu[0].couleur_background_header
             this.state.couleur_background_footer = this.state.styleMenu[0].couleur_background_footer
             this.state.couleur_background_template = this.state.styleMenu[0].couleur_background_template
             this.state.couleur_boutons = this.state.styleMenu[0].couleur_boutons
             this.state.url_image_logo = this.state.styleMenu[0].url_image_logo
             this.state.url_image_menu = this.state.styleMenu[0].url_image_menu
         }
         // console.log(this.state.couleur_titre_navigation)
         // console.log(this.state.url_image_menu)
         // const xx = addToCart
         // const { addProduct } = this.props

         return (

             <div className='modifstandard'>
                 <div className='bodymodifstandard'>
                     <ModifUnFInalComponent addToCart={this.addToCart} countCart={this.state.countcartitem} getItem={this.getItem} handleInputChange={this.handleInputChange} product={this.props} produits={this.state.produitsByResto} categories={this.state.categories} couleurbackgroundheader={this.state.couleur_background_header} imagelogo={this.state.url_image_logo} imagemenu={this.state.url_image_menu} couleuBackgroundTemplate={this.state.couleur_background_template} couleurTitreCategorie={this.state.couleur_titre_categorie} couleurtitrenav={this.state.couleur_titre_navigation} />
                 </div>
                 {this.state.proprio
                     ? <div className='btns'>
                         <Link to='/modifstandard'> <button>Modifier</button></Link>
                     </div> : <div />}
             </div>
         )
     }
}

export default ModifUnFinalContainer
