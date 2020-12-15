import React, { Component } from 'react'
import InputComponent from '../component/input-component'
import HeaderNoConnect from '../component/header-no-connect'
import '../css/inscription.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const baseUrl = 'https://menuio-app1.herokuapp.com/'
const base2 = 'https://cors-anywhere.herokuapp.com/'
class InscriptionRestoFormContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            valuesForm: {},
            errors: {},
            proprio: [],
            error: null,
            idp: 0

        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event) {
        this.setState({
            valuesForm: Object.assign(this.state.valuesForm, { [event.target.name]: event.target.value })
        })
    }

    componentDidMount () {
        console.log('allo')
        const nom = localStorage.getItem('email')
        // console.log(Json.parse(email))

        const url = base2 + baseUrl + 'email/' + JSON.parse(nom)
        console.log(url)

        Promise.all([
            fetch(base2 + baseUrl + 'email/' + JSON.parse(nom), {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }),
            fetch((base2 + baseUrl + 'produits/' + this.state.id_menu), {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }),
            fetch((base2 + baseUrl + ' stylemenu/' + this.state.idtemplate), {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            })
        ]

        )
            .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
            .then(([data1, data2, data3]) => this.setState({
                proprio: data1
            }))
        // window.location.reload()
    }

    handleSubmit (event) {
        event.preventDefault()
        if (this.handleValidation()) {
            // const { match: { params } } = this.props
            let idProprietaire
            const valuesForm = this.state.valuesForm

            if (this.state.proprio[0]) {
                console.log('vrai')
                idProprietaire = this.state.proprio[0].id
                console.log(idProprietaire)
            }
            const dataToSend = { nom: valuesForm.nom, email: valuesForm.email, addresse: valuesForm.addresse, telephone: Number(valuesForm.telephone), nombre_table: valuesForm.nombre_table, id_proprietaire: Number(idProprietaire) }
            console.log('var dataToSendForm2' + JSON.stringify(dataToSend))

            const requestOptions = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            }

            fetch(base2 + baseUrl + 'inscription/restaurant', requestOptions)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    console.log(data)
                    // this.props.history.push('/inscription/' + data)
                })
        } else {
            console.log('champ non valide')
        }
    }

    handleValidation () {
        const valuesForm = this.state.valuesForm
        const errors = {}
        let isValidForm = true

        // Nom
        if (!valuesForm.nom) {
            isValidForm = false
            errors.nom = 'Ce champs ne peut être vide'
        }

        // Email
        if (!valuesForm.email) {
            isValidForm = false
            errors.email = 'Ce champ ne peut pas être vide'
        }

        if (typeof valuesForm.email !== 'undefined') {
            const lastAtPos = valuesForm.email.lastIndexOf('@')
            const lastDotPos = valuesForm.email.lastIndexOf('.')

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && valuesForm.email.indexOf('@@') === -1 && lastDotPos > 2 && (valuesForm.email.length - lastDotPos) > 2)) {
                isValidForm = false
                errors.email = "L'email n'est pas valide"
            }
        }

        this.setState({ errors: errors })
        return isValidForm
    }

    render () {
        console.log(this.state.proprio[0])
        if (this.state.proprio[0]) {
            console.log('vraiiiii')
        } else {
            console.log('false')
        }
        return (
            <div>
                <HeaderNoConnect />

                <div>
                    <div>
                        <h1>Inscription : </h1>
                        <p>Étape 2 : Entrez les informations concernant votre restaurant</p>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <InputComponent
                            id='nom'
                            name='nom'
                            type='text'
                            text='Nom du restaurant '
                            onChange={this.handleChange}
                            classNameDiv='form-group'
                        />
                        <span>{this.state.errors.nom}</span>

                        <InputComponent
                            id='email'
                            name='email'
                            type='text'
                            text='E-mail du restaurant'
                            classNameDiv='form-group'
                            onChange={this.handleChange}
                        />
                        <span>{this.state.errors.prenom}</span>

                        <InputComponent
                            id='addresse'
                            name='addresse'
                            type='text'
                            text='Addresse du restaurant'
                            classNameDiv='form-group'
                            onChange={this.handleChange}
                        />
                        <InputComponent
                            id='telephone'
                            name='telephone'
                            type='tel'
                            text='Téléphone'
                            value={this.state.valuesForm.telephone}
                            classNameDiv='form-group'
                            onChange={this.handleChange}
                        />
                        <span>{this.state.errors.telephone}</span>
                        <InputComponent
                            id='nombre_table'
                            name='nombre_table'
                            type='number'
                            text='Nombre de table dans le restaurant'
                            classNameDiv='form-group'
                            onChange={this.handleChange}
                        />

                        <input type='submit' value='Envoyer' />

                    </form>
                </div>

            </div>
        )
    }
}

export default InscriptionRestoFormContainer
