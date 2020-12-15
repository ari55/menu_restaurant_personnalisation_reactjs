import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import InputComponent from '../component/input-component'
import HeaderNoConnect from '../component/header-no-connect'
import '../css/inscription.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const baseUrl = 'https://menuio-app1.herokuapp.com/'
const base2 = 'https://cors-anywhere.herokuapp.com/'
class InscriptionFormContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            valuesForm: {},
            dataToSendForm1: {},
            errors: {},
            idProprio: 0,
            goNextPage: false,
            proprio: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (event) {
        event.preventDefault()
        if (this.handleValidationForm1()) {
            // let statusCode
            const valuesForm = this.state.valuesForm
            const dataToSendForm1 = { nom: valuesForm.nom, prenom: valuesForm.prenom, email: valuesForm.email, telephone: Number(valuesForm.telephone), addresse: valuesForm.addresse, passwords: valuesForm.passwords }
            console.log(dataToSendForm1)

            this.setState({ dataToSendForm1: dataToSendForm1, goNextPage: true })

            const requestOptionsForm1 = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSendForm1)
            }
            fetch(base2 + baseUrl + 'inscription/proprietaire', requestOptionsForm1)
                .then(res => res.text()) // convert to plain text
                .then(text => console.log(text))
                .then(localStorage.setItem('email', JSON.stringify(this.state.valuesForm.email)))
                .then(this.props.history.push('inforesto'))

            /* if (statusCode === 200) {
                this.setState({ goNextPage: true })
                localStorage.setItem('itemStored', JSON.stringify(itemObject));
            } */
        }
    }

    handleChange (field, event) {
        const valuesForm = this.state.valuesForm
        valuesForm[field] = event.target.value
        this.setState({ valuesForm })
    }

    handleValidationForm1 () {
        const valuesForm = this.state.valuesForm
        const errors = {}
        let isValidForm = true

        // Nom
        if (!valuesForm.nom) {
            isValidForm = false
            errors.nom = 'Ce champs ne peut être vide'
        }

        if (typeof valuesForm.nom !== 'undefined') {
            if (!valuesForm.nom.match(/^[a-zA-Z]+$/)) {
                isValidForm = false
                errors.nom = 'Inserez juste des lettres svp'
            }
        }

        // Prenom
        if (!valuesForm.prenom) {
            isValidForm = false
            errors.prenom = 'Ce champs ne peut être vide'
        }

        if (typeof valuesForm.prenom !== 'undefined') {
            if (!valuesForm.nom.match(/^[a-zA-Z]+$/)) {
                isValidForm = false
                errors.prenom = 'Inserez juste des lettres svp'
            }
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

        // Téléphonne
        if (!valuesForm.telephone) {
            isValidForm = false
            errors.telephone = 'Ce champ ne peut pas être vide'
        }

        /* if (typeof valuesForm.telephone !== 'undefined') {
            if (!valuesForm.telephone.match(/^[0-9]{10}/)) {
                isValidForm = false
                errors.telephone = 'Cet doit contenir 10 chiffres'
            }
        } */

        // Mot de passe
        if (!valuesForm.passwords) {
            isValidForm = false
            errors.passwords = 'Ce champ ne peut pas être vide'
        }

        // Confirmation de mot de passe
        if (valuesForm.password2 !== valuesForm.passwords) {
            isValidForm = false
            errors.password2 = 'Les mot de passe doivent être identiques'
        }

        this.setState({ errors: errors })
        return isValidForm
    }

    render () {
        /* if (this.state.goNextPage) {
            console.log('ID render :  ' + id)
            return <Redirect to={'/inscription/' + id} />
        } */
        // console.log(this.state.valuesForm.email)
        //    localStorage.clear()

        return (
            <div>
                <HeaderNoConnect />
                <div>
                    <div>
                        <h1>Inscription : </h1>
                        <p>Étape 1 : Entrez vos informations personnelles</p>
                    </div>

                    <form onSubmit={this.handleSubmit}>

                        <InputComponent
                            id='nom'
                            name='nom'
                            type='text'
                            text='Nom'
                            onChange={this.handleChange.bind(this, 'nom')}
                            classNameDiv='form-group'
                            value={this.state.valuesForm.nom}
                        />
                        <span>{this.state.errors.nom}</span>

                        <InputComponent
                            id='prenom'
                            name='prenom'
                            type='text'
                            text='Prenom'
                            value={this.state.valuesForm.prenom}
                            classNameDiv='form-group'
                            onChange={this.handleChange.bind(this, 'prenom')}
                        />
                        <span>{this.state.errors.prenom}</span>

                        <InputComponent
                            id='email'
                            name='email'
                            type='text'
                            text='E-mail'
                            value={this.state.valuesForm.email}
                            classNameDiv='form-group'
                            onChange={this.handleChange.bind(this, 'email')}
                        />
                        <span>{this.state.errors.email}</span>

                        <InputComponent
                            id='telephone'
                            name='telephone'
                            type='tel'
                            text='Téléphone'
                            value={this.state.valuesForm.telephone}
                            classNameDiv='form-group'
                            onChange={this.handleChange.bind(this, 'telephone')}
                        />
                        <span>{this.state.errors.telephone}</span>

                        <InputComponent
                            id='addresse'
                            name='addresse'
                            type='text'
                            text='Addresse'
                            value={this.state.valuesForm.addresse}
                            classNameDiv='form-group'
                            onChange={this.handleChange.bind(this, 'addresse')}
                        />

                        <InputComponent
                            id='passwords'
                            name='passwords'
                            type='password'
                            text='Mot de passe'
                            value={this.state.valuesForm.passwords}
                            classNameDiv='form-group'
                            onChange={this.handleChange.bind(this, 'passwords')}
                        />
                        <span>{this.state.errors.passwords}</span>

                        <InputComponent
                            id='password2'
                            name='password2'
                            type='password'
                            text='Mot de passe de confirmation'
                            value={this.state.valuesForm.password2}
                            classNameDiv='form-group'
                            onChange={this.handleChange.bind(this, 'password2')}
                        />
                        <span>{this.state.errors.password2}</span>
                        <input type='submit' value='Envoyer' />

                    </form>
                </div>

            </div>
        )
    }
}

export default InscriptionFormContainer
