import React, { Component } from 'react'
import HeaderApp from '../component/header-app'
import AjouterProduitComponent from '../component/ajouter-produit-component'
import '../css/ajoutProduit.css'

const baseUrl = 'https://menuio-app1.herokuapp.com/'
const base2 = 'https://cors-anywhere.herokuapp.com/'

class AjouterProduitContainer extends Component {
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
            nomCategorie: '',
            idpathCategorie: '',
            image: null

        }
        this.getIdCategorie = this.getIdCategorie.bind(this)
        this.getNomProduit = this.getNomProduit.bind(this)
        this.getDescription = this.getDescription.bind(this)
        this.OnHandleSubmit = this.OnHandleSubmit.bind(this)
        this.getPrix = this.getPrix.bind(this)
        this.getNomCategorie = this.getNomCategorie.bind(this)
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
        // this.onFileChangeHandler = this.onFileChangeHandler.bind(this)
    }

    fileSelectedHandler (event) {
        this.setState({ image: event.target.files[0] })
        console.log(this.state.image)
    }

    fileUploaderHandler () {

    }

    componentDidMount () {
        Promise.all([
            fetch(base2 + baseUrl + '/categorie', {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }),
            fetch(base2 + baseUrl + 'stylemenu/1', {
                // 'Content-Type': 'application/json',
                'Content-Type': 'multipart/form-data',
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

    upload () {
        const formData = new FormData()
        formData.append('imurl_image', this.state.selectetedFile, this.state.selectetedFile.name)
        console.log(formData)
    }

    OnHandleSubmit (event) {
        event.preventDefault()
        const formData = new FormData()
        const jsonDataobj = { nom: this.state.nomProduit, description: this.state.description, prix: this.state.prix, idCategorie: this.state.idCategorie, idMenu: this.state.id_menu }
        formData.append('file', this.state.image)
        formData.append('empJson', JSON.stringify(jsonDataobj))
        console.log(this.state.image)
        const urlConnexion = 'produit'
        const urlFinalConnexion = base2 + baseUrl + urlConnexion
        console.log(urlFinalConnexion)

        if (this.state.nomProduit.localeCompare('') !== 0 && this.state.prix.localeCompare('') !== 0) {
            console.log('gut')
            fetch(urlFinalConnexion, {
                method: 'POST',
                enctype: 'multipart/form-data',
                body: formData
            })
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => console.log(err))

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
        // console.log(this.state.selectetedFile)
        /* console.log(this.state.stylemenu) */

        return (
            <div className='ajoutProduit'>
                <div className='ajoutproduitHeader'>
                    <HeaderApp />
                </div>
                <h2>Ajout d'un produit</h2>

                <AjouterProduitComponent onFileChangeHandler={this.onFileChangeHandler} fileSelectedHandler={this.fileSelectedHandler} idpathCategorie={this.state.idpathCategorie} stylemenu={this.state.stylemenu} categories={this.state.categories} OnHandleSubmit={this.OnHandleSubmit} getPrix={this.getPrix} getDescription={this.getDescription} getIdCategorie={this.getIdCategorie} getNomProduit={this.getNomProduit} />
            </div>
        )
    }
}

export default AjouterProduitContainer
