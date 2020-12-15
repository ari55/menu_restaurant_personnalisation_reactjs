import React, { Component } from 'react'
import ModificationTemplateStandardComponent from '../component/modification-template-standard-component'
import ModifUnComponent from '../component/modif-component-un'
import { Link } from 'react-router-dom'
import HeaderApp from '../component/header-app'
import HeaderAppContainer from '../container/header-app-container'

import '../css/modificationTstandard.css'
const baseUrl = 'https://menuio-app1.herokuapp.com/'
const base2 = 'https://cors-anywhere.herokuapp.com/'
class ModificationTemplateStandardContainer extends Component {
    constructor (props) {
        super(props)
        this.textInput = React.createRef()
        this.textInputB = React.createRef()
        this.textInputC = React.createRef()
        this.textInputD = React.createRef()
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
            colorC: [],
            colorD: [],
            resto: []

        }
        this.onhandleDeleteCategorie = this.onhandleDeleteCategorie.bind(this)
        this.onhandleDeleteProduit = this.onhandleDeleteProduit.bind(this)
        this.editCategorie = this.editCategorie.bind(this)
        this.modifierStyleMenu = this.modifierStyleMenu.bind(this)
        this.modifierStyleMenuOne = this.modifierStyleMenuOne.bind(this)
        this.modifierLeStyleMenu = this.modifierLeStyleMenu.bind(this)
        this.test = this.test.bind(this)
        this.test1 = this.test1.bind(this)
        this.test2 = this.test2.bind(this)

        // this.ItemChecked = this.ItemChecked.bind(this)
        // this.ItemCheckedB = this.ItemChecked.bind(this)
        this.OnhandleChangeimagemenu = this.OnhandleChangeimagemenu.bind(this)
        this.OnhandleChangeimagelogo = this.OnhandleChangeimagelogo.bind(this)
    }

    OnHandleSave (e) {
        console.log(e.target.value)
        this.setState({ categorie: e.target.value })
    }

    onhandleDeleteCategorie (id) {
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
        fetch(base2 + baseUrl + 'produits/' + id, {
            method: 'DELETE',
            'Content-Type': 'application/json',
            Accept: 'application/json'

        })
            .then((response) => response.json())
        //  .then((response) => console.log(response))
            .then((response) => this.setState({ produitsByResto: response }))
            .then(window.location.reload())
    }

    componentDidMount () {
        console.log('allo')
        const iduser = localStorage.getItem('idUser')

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
            }),
            fetch((base2 + baseUrl + 'iproprio/' + iduser), {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            })
        ]

        )
            .then(([res1, res2, res3, res4]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]))
            .then(([data1, data2, data3, data4]) => this.setState({
                categories: data1,
                produitsByResto: data2,
                styleMenu: data3,
                resto: data4

            }))
    }

    editCategorie (id) {
        this.props.history.push('editerCategorie/' + id)
    }

    fileSelectedHandlerMenu (event) {
        this.setState({ image: event.target.files[0] })
    }

    ItemChecked (e) {
        e.preventDefault()
        /// f
        this.textInput.current.focus()
        this.setState({ color: this.textInput.current.value })
    }

    ItemCheckedB (e) {
        e.preventDefault()
        this.setState({ colorB: this.textInputB.current.value })
    }

    ItemCheckedC (e) {
        e.preventDefault()
        this.setState({ colorC: this.textInputC.current.value })
        console.log(this.state.colorC)
    }

    ItemCheckedD (e) {
        e.preventDefault()
        this.textInput.current.focus()
        this.setState({ colorD: this.textInputD.current.value })
    }

    OnhandleChangeimagemenu (event) {
        this.setState({ url_image_menu: event.target.files[0] })
        console.log(this.state.url_image_menu)
    }

    OnhandleChangeimagelogo (event) {
        this.setState({ url_image_logo: event.target.files[0] })
    }
    // OnhandleChangeimagelogo (event) {
    //     this.setState({ url_image_logo: URL.createObjectURL(event.target.files[0]) })
    // }

    test (a) {
        if (this.state.styleMenu[0]) {
            if (a.length !== 0) {
                console.log('test')
                return a
                // console.log(a)
            } else {
                console.log(' notest')

                return this.state.styleMenu[0].couleur_titre_categorie
                // console.log(this.state.styleMenu[0].couleur_titre_categorie)
            }
        }
    }

    test1 (a) {
        if (this.state.styleMenu[0]) {
            if (a.length !== 0) {
                console.log('test')
                return a
                // console.log(a)
            } else {
                console.log(' notest')

                return this.state.styleMenu[0].couleur_background_header
            }
        }
    }

    test2 (a) {
        if (this.state.styleMenu[0]) {
            if (a.length !== 0) {
                console.log('test')
                return a
                // console.log(a)
            } else {
                console.log(' notest')

                return this.state.styleMenu[0].couleur_background_template
                // console.log(this.state.styleMenu[0].couleur_titre_categorie)
            }
        }
    }

    modifierLeStyleMenu (event) {
        event.preventDefault()
        console.log(this.state.styleMenu)
        // const urlConnexion = ' http://localhost:8080/lestylemenu/' + this.state.styleMenu[0].id
        const urlConnexion = base2 + baseUrl + 'lestylemenu/' + this.state.styleMenu[0].id

        let jsonDataobj
        if (this.state.styleMenu[0]) {
            console.log('oh')
            this.state.url_image_logo = this.state.styleMenu[0].url_image_logo
            this.state.url_image_menu = this.state.styleMenu[0].url_image_menu
            console.log(this.state.styleMenu[0].url_image_logo)
            jsonDataobj = { couleur_titre_navigation: this.state.couleur_titre_navigation, couleur_titre_categorie: this.test(this.state.color), couleur_titre_produits: this.state.couleur_titre_produits, couleur_titre_logo: this.state.couleur_titre_logo, couleur_background_logo: this.state.couleur_background_logo, couleur_background_header: this.test1(this.state.colorB), couleur_background_footer: this.state.couleur_background_footer, couleur_background_template: this.test2(this.state.colorC), couleur_boutons: this.state.couleur_boutons, url_image_logo: this.state.url_image_logo, url_image_menu: this.state.url_image_menu }
        }
        console.log(this.state.url_image_menu)
        const formData = new FormData()
        formData.append('empJson', JSON.stringify(jsonDataobj))

        console.log(jsonDataobj)
        console.log(formData)
        console.log(urlConnexion)

        fetch(urlConnexion, {
            method: 'PUT',
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
    }

    modifierStyleMenu (event) {
        event.preventDefault()
        console.log(this.state.styleMenu)
        const urlConnexion = base2 + baseUrl + this.state.styleMenu[0].id
        // const resultModifStyleMenu = { couleur_titre_navigation: this.state.couleur_titre_navigation, couleur_titre_categorie: this.state.couleur_titre_categorie, couleur_titre_produits: this.state.couleur_titre_produits, couleur_titre_logo: this.state.couleur_titre_logo, couleur_background_logo: this.state.couleur_background_logo, couleur_background_header: this.state.couleur_background_header, couleur_background_footer: this.state.couleur_background_footer, couleur_background_template: this.state.couleur_background_template, couleur_boutons: this.state.couleur_boutons, url_image_logo: this.state.url_image_logo, url_image_menu: this.state.url_image_menu }
        const jsonDataobj = { couleur_titre_navigation: this.state.couleur_titre_navigation, couleur_titre_categorie: this.state.couleur_titre_categorie, couleur_titre_produits: this.state.couleur_titre_produits, couleur_titre_logo: this.state.couleur_titre_logo, couleur_background_logo: this.state.couleur_background_logo, couleur_background_header: this.state.couleur_background_header, couleur_background_footer: this.state.couleur_background_footer, couleur_background_template: this.state.couleur_background_template, couleur_boutons: this.state.couleur_boutons }
        // console.log(this.state.url_image_logo)
        console.log(this.state.url_image_menu)
        const formData = new FormData()
        // formData.append('fileone', this.state.url_image_logo)
        formData.append('filetwo', this.state.url_image_menu)
        formData.append('empJson', JSON.stringify(jsonDataobj))

        console.log(jsonDataobj)
        console.log(formData)
        console.log(urlConnexion)

        fetch(urlConnexion, {
            method: 'PUT',
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
        window.location.reload()
    }

    modifierStyleMenuOne (event) {
        event.preventDefault()
        console.log(this.state.styleMenu)
        const urlConnexion = base2 + baseUrl + 'stylemenu/' + this.state.styleMenu[0].id
        // const resultModifStyleMenu = { couleur_titre_navigation: this.state.couleur_titre_navigation, couleur_titre_categorie: this.state.couleur_titre_categorie, couleur_titre_produits: this.state.couleur_titre_produits, couleur_titre_logo: this.state.couleur_titre_logo, couleur_background_logo: this.state.couleur_background_logo, couleur_background_header: this.state.couleur_background_header, couleur_background_footer: this.state.couleur_background_footer, couleur_background_template: this.state.couleur_background_template, couleur_boutons: this.state.couleur_boutons, url_image_logo: this.state.url_image_logo, url_image_menu: this.state.url_image_menu }
        const jsonDataobj = { couleur_titre_navigation: this.state.couleur_titre_navigation, couleur_titre_categorie: this.state.couleur_titre_categorie, couleur_titre_produits: this.state.couleur_titre_produits, couleur_titre_logo: this.state.couleur_titre_logo, couleur_background_logo: this.state.couleur_background_logo, couleur_background_header: this.state.couleur_background_header, couleur_background_footer: this.state.couleur_background_footer, couleur_background_template: this.state.couleur_background_template, couleur_boutons: this.state.couleur_boutons }
        // console.log(this.state.url_image_logo)
        console.log(this.state.url_image_menu)
        const formData = new FormData()
        formData.append('fileone', this.state.url_image_logo)
        // formData.append('filetwo', this.state.url_image_menu)
        formData.append('empJson', JSON.stringify(jsonDataobj))

        console.log(jsonDataobj)
        console.log(formData)
        console.log(urlConnexion)

        fetch(urlConnexion, {
            method: 'PUT',
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
        window.location.reload()
    }

    render () {
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
            // this.state.url_image_logo = this.state.styleMenu[0].url_image_logo
            // this.state.url_image_menu = this.state.styleMenu[0].url_image_menu
        }
        // console.log(this.state.couleur_titre_navigation)
        console.log(this.state.styleMenu[0])
        if (this.state.resto[0]) {
            console.log(this.state.resto[0])
            localStorage.setItem('nomresto', this.state.resto[0].nom)
        }
        if (this.state.categories.length) {
            return (
                <div className='modifstandard'>
                    <div className='headermodifstandard'>
                        <HeaderAppContainer />
                    </div>
                    <div className='bodymodifstandard'>
                        <ModifUnComponent modifierLeStyleMenu={this.modifierLeStyleMenu} modifierStyleMenuOne={this.modifierStyleMenuOne} handleChangeimagelogo={this.OnhandleChangeimagelogo} handleChangeimagemenu={this.OnhandleChangeimagemenu} urlimagelogo={this.state.url_image_logo} urlimagemenu={this.state.url_image_menu} refeC={this.textInputC} refe={this.textInput} refeB={this.textInputB} refeD={this.textInputD} ItemCheckedC={this.ItemCheckedC.bind(this)} ItemChecked={this.ItemChecked.bind(this)} ItemCheckedB={this.ItemCheckedB.bind(this)} ItemCheckedD={this.ItemCheckedD.bind(this)} couleurbackgroundheader={this.state.couleur_background_header} couleurtitrenavigation={this.state.couleur_titre_navigation} couleurbackgroundtemplate={this.state.couleur_background_template} couleurC={this.state.colorC} couleurB={this.state.colorB} couleurD={this.state.colorD} couleur={this.state.color} styleMenu={this.state.styleMenu} modifierStyleMenu={this.modifierStyleMenu} editCategorie={this.editCategorie} deleteProduct={this.deleteProduct} produitsByResto={this.state.produitsByResto} categories={this.state.categories} onhandleDeleteCategorie={this.onhandleDeleteCategorie} handleDeleteProduit={this.onhandleDeleteProduit} />
                    </div>
                    <div className='btns'>
                        <Link to='/ajoutCategorie'> <button>Ajouter une nouvelle categorie</button></Link>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='modifstandard'>
                    <div className='headermodifstandard'>
                        <HeaderApp />
                    </div>
                    <h3>Personnalisez le template pour le menu votre restaurant</h3>

                    <div className='bodymodifstandard'>

                        <ModificationTemplateStandardComponent onSave={this.handleOnSave} OnHandleSave={this.OnHandleSave} />
                    </div>
                    <div className='btns'>
                        <Link to='/ajoutCategorie'> <button>Ajouter une nouvelle categorie</button></Link>
                        <button>Sauvegarder</button>
                    </div>
                </div>
            )
        }
    }
}

export default ModificationTemplateStandardContainer
