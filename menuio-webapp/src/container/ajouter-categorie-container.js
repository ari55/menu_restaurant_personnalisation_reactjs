import React, { Component } from 'react'
import HeaderApp from '../component/header-app'
import AjouterCategorieComponent from '../component/ajouter-categorie-component'
import '../css/ajoutProduit.css'

const baseUrl = 'https://menuio-app1.herokuapp.com/'
const base2 = 'https://cors-anywhere.herokuapp.com/'
class AjouterCategorieContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            idCategorie: '',
            nomProduit: '',
            description: '',
            prix: '',
            categories: [],
            stylemenu: [],
            etat: false,
            id_menu: '1',
            nomCategorie: ''

        }
        this.getIdCategorie = this.getIdCategorie.bind(this)
        this.getNomProduit = this.getNomProduit.bind(this)
        this.getDescription = this.getDescription.bind(this)
        this.OnHandleSubmit = this.OnHandleSubmit.bind(this)
        this.OnHandleSubmitCategorie = this.OnHandleSubmitCategorie.bind(this)
        this.getPrix = this.getPrix.bind(this)
        //  this.renderList = this.renderList.bind(this)
        this.getNomCategorie = this.getNomCategorie.bind(this)
    }

    componentDidMount () {
        Promise.all([
            fetch(base2 + baseUrl + 'categorie', {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }),
            fetch(base2 + baseUrl + 'stylemenu/1', {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            })
        ]

        )
            .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
            .then(([data1, data2]) => this.setState({
                categories: data1,
                stylemenu: data2

            }))
    }

    getIdCategorie (e) {
        console.log(e.target.value)
        this.setState({ idCategorie: e.target.value })
    }

    getPrix (e) {
        console.log(e.target.value)
        this.setState({ prix: e.target.value })
    }

    getNomProduit (e) {
        console.log(e.target.value)
        this.setState({ nomProduit: e.target.value })
    }

    getNomCategorie (e) {
        console.log(e.target.value)
        this.setState({ nomCategorie: e.target.value })
    }

    getDescription (e) {
        console.log(e.target.value)
        this.setState({ description: e.target.value })
    }

    OnHandleSubmitCategorie (event) {
        event.preventDefault()
        console.log(event)
        const urlConnexion = 'ajout/categorie'
        const resultFormulaire = { nom: this.state.nomCategorie, id_menu: this.state.id_menu }
        console.log(resultFormulaire)
        const resultForm = JSON.stringify(resultFormulaire)
        console.log(resultForm)
        const urlFinalConnexion = base2 + baseUrl + urlConnexion
        console.log(urlFinalConnexion)

        if (this.state.nomCategorie.localeCompare('') !== 0) {
            console.log('gut')
            fetch(urlFinalConnexion, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: resultForm
            })
                .then(response => {
                    this.setState({ etat: true })
                    return response.json()
                })
                .then(response => {
                    if (response !== null) {
                        // this.setState({ etat: true })
                    }
                })
                .catch(function (error) {
                    console.log('There has been a problem with your fetch operation: ' + error.message)
                })
        } else {
            console.log('wrong')
        }
        // event.target.reset()
        document.getElementById('myForm').reset()
    }

    OnHandleSubmit (event) {
        event.preventDefault()
        console.log(event)
        const urlConnexion = 'ajout/produit'
        const resultFormulaire = { nom: this.state.nomProduit, description: this.state.description, prix: this.state.prix, idCategorie: this.state.idCategorie }
        console.log(resultFormulaire)
        const resultForm = JSON.stringify(resultFormulaire)
        console.log(resultForm)
        const urlFinalConnexion = base2 + baseUrl + urlConnexion
        console.log(urlFinalConnexion)

        if (this.state.nomProduit.localeCompare('') !== 0 && this.state.prix.localeCompare('') !== 0) {
            console.log('gut')
            fetch(urlFinalConnexion, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: resultForm
            })
                .then(response => {
                    this.setState({ etat: true })
                    return response.json()
                })
                .then(response => {
                    if (response !== null) {
                        // this.setState({ etat: true })
                    }
                })
                .catch(function (error) {
                    console.log('There has been a problem with your fetch operation: ' + error.message)
                })
        } else {
            console.log('wrong')
        }
        // event.target.reset()
        document.getElementById('myForm').reset()
    }

    render () {
        /*    console.log(this.state.categories)
        console.log(this.state.stylemenu) */

        return (
            <div className='ajoutProduit'>
                <div className='ajoutproduitHeader'>
                    <HeaderApp />
                </div>
                <h2>Ajout d'une categorie</h2>

                <AjouterCategorieComponent OnHandleSubmit={this.OnHandleSubmit} OnHandleSubmitCategorie={this.OnHandleSubmitCategorie} getNomCategorie={this.getNomCategorie} getPrix={this.getPrix} getDescription={this.getDescription} getIdCategorie={this.getIdCategorie} getNomProduit={this.getNomProduit} />
            </div>
        )
    }
}

export default AjouterCategorieContainer
