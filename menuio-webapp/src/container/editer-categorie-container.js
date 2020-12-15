import React, { Component } from 'react'
import HeaderAppContainer from '../container/header-app-container'
import ModifierCategorie from '../component/modifier-categorie'
const baseUrl = 'https://menuio-app1.herokuapp.com/'
const base2 = 'https://cors-anywhere.herokuapp.com/'
class EditerCategorie extends Component {
    constructor () {
        super()
        this.state = {
            nomCategorie: '',
            idCategorie: '',
            nom: '',
            id_menu: '1'

        }
        this.getNomCategorie = this.getNomCategorie.bind(this)
        this.editerCategorie = this.editerCategorie.bind(this)
    }

    componentDidMount () {
        const { match: { params } } = this.props
        //
        const pathArray = window.location.pathname.split('/')
        const pathArray1 = window.location.pathname
        console.log(pathArray1)
        console.log(pathArray1.length)
        const idpath = pathArray[2]
        const idpath2 = pathArray[3]

        console.log(idpath)
        this.setState({ nomCategorie: idpath, idCategorie: idpath2 })
        console.log(this.state.nomCategorie)
        console.log(this.state.idCategorie)
    }

    getNomCategorie (e) {
        console.log(e.target.value)
        this.setState({ nomCategorie: e.target.value })
    }

    editerCategorie (event) {
        event.preventDefault()
        const urlConnexion = base2 + baseUrl + 'categorie/' + this.state.idCategorie
        const resultmodif = { nom: this.state.nomCategorie, id_menu: this.state.id_menu }
        console.log(resultmodif)
        const resultForm = JSON.stringify(resultmodif)
        const urlFinalConnexion = urlConnexion
        console.log(urlFinalConnexion)

        fetch(urlFinalConnexion, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: resultForm
        })
            .then(response => {
                return response.json()
            })
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error.message)
            })
    }

    render () {
        console.log(this.state.nomCategorie)
        console.log(this.state.idCategorie)

        return (
            <div>
                <HeaderAppContainer />
                <ModifierCategorie editerCategorie={this.editerCategorie} nomcategori={this.state.nomCategorie} getNomCategorie={this.getNomCategorie} />
            </div>
        )
    }
}

export default EditerCategorie
