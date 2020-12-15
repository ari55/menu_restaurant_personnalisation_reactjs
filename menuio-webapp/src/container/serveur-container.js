import React, { Component } from 'react'
import { Collapse, Button } from 'react-bootstrap'
import HeaderAppContainer from '../container/header-app-container'
import InputComponent from '../component/input-component'
import '../css/serveur.css'
const baseUrl = 'https://menuio-app1.herokuapp.com/'
const base2 = 'https://cors-anywhere.herokuapp.com/'
class ServeurContainer extends Component {
    constructor () {
        super()
        this.state = {
            idResto: localStorage.getItem('idResto'),
            serveurs: [],
            openCollapse: false,
            valuesForm: {},
            errors: {},
            resultAjoutServeur: ''
        }

        this.handleSetOpen = this.handleSetOpen.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // Tous les serveurs à partir de IdResto
    componentDidMount () {
        fetch(base2 + baseUrl + 'serveur/' + this.state.idResto)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({ serveurs: result })
                console.log(this.state.serveurs)
            })
    }

    handleSetOpen () {
        this.setState({ openCollapse: !this.state.openCollapse })
    }

    handleChange () {
        this.setState({
            valuesForm: Object.assign(this.state.valuesForm, { [event.target.name]: event.target.value })
        })
    }

    handleSubmit (event) {
        event.preventDefault()

        if (this.validationForm()) {
            const valuesForm = this.state.valuesForm
            const date = new Date().toLocaleString()
            const dataToSend = { nom: valuesForm.nom, prenom: valuesForm.prenom, email: valuesForm.email, telephone: valuesForm.telephone, addresse: valuesForm.addresse, passwords: valuesForm.passwords, date_enregistrement: date, id_restaurant: Number(this.state.idResto) }
            console.log(dataToSend)

            const requestOptionsForm = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(dataToSend)
            }

            fetch(base2 + baseUrl + 'addserveur', requestOptionsForm)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    console.log(data)
                    this.setState({ resultAjoutServeur: data })
                })
        }
    }

    validationForm () {
        const valuesForm = this.state.valuesForm
        const errors = {}
        let isValidForm = true

        if (valuesForm.password2 !== valuesForm.passwords) {
            isValidForm = false
            errors.password2 = 'Les mot de passe doivent être identiques'
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
        return (
            <div>
                <HeaderAppContainer />

                {this.state.serveurs.length === 0

                    ? <div className='text-center'>
                        <h1>Nous n'avons aucun serveur enregistré pour le moment ! </h1>
                    </div>

                    : <div className='mx-5 pt-2'>
                        <div className='text-center'>
                            <h1>Liste des serveurs</h1>
                        </div>

                        <table className='table table-striped'>
                            <thead className='thead-dark'>
                                <tr>
                                    <th scope='col'>Nom</th>
                                    <th scope='col'>Prenom</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Téléphone</th>
                                    <th scope='col'>Addresse</th>
                                    <th scope='col'>Date d'enregistrement</th>
                                    <th scope='col'>Code</th>

                                </tr>
                            </thead>

                            <tbody>
                                {this.state.serveurs.map((serveur, i) =>
                                    <tr key={i}>
                                        <td>{serveur.nom}</td>
                                        <td>{serveur.prenom}</td>
                                        <td>{serveur.email}</td>
                                        <td>{serveur.telephone}</td>
                                        <td>{serveur.addresse}</td>
                                        <td>{serveur.date_enregistrement}</td>
                                        <td>{serveur.passwords}</td>
                                    </tr>
                                )}
                            </tbody>

                        </table>

                        <div>
                            <Button
                                onClick={this.handleSetOpen}
                                aria-controls='collapse-form-serveur'
                                aria-expanded={this.state.openCollapse}
                            >Ajouter un serveur
                            </Button>

                            <Collapse in={this.state.openCollapse}>
                                <div id='collapse-form-serveur'>
                                    <form onSubmit={this.handleSubmit}>
                                        <InputComponent
                                            id='nom'
                                            name='nom'
                                            type='text'
                                            text='Nom du serveur '
                                            onChange={this.handleChange}
                                            classNameDiv='form-group'
                                        />

                                        <InputComponent
                                            id='prenom'
                                            name='prenom'
                                            type='text'
                                            text='Prenom du serveur '
                                            onChange={this.handleChange}
                                            classNameDiv='form-group'
                                        />

                                        <InputComponent
                                            id='email'
                                            name='email'
                                            type='text'
                                            text='E-mail du serveur'
                                            onChange={this.handleChange}
                                            classNameDiv='form-group'
                                        />
                                        <span>{this.state.errors.email}</span>

                                        <InputComponent
                                            id='telephone'
                                            name='telephone'
                                            type='tel'
                                            text='Téléphone du serveur'
                                            onChange={this.handleChange}
                                            classNameDiv='form-group'
                                        />

                                        <InputComponent
                                            id='addresse'
                                            name='addresse'
                                            type='text'
                                            text='Addresse du serveur'
                                            onChange={this.handleChange}
                                            classNameDiv='form-group'
                                        />

                                        <InputComponent
                                            id='passwords'
                                            name='passwords'
                                            type='password'
                                            text='Mot de passe'
                                            onChange={this.handleChange}
                                            classNameDiv='form-group'
                                        />

                                        <InputComponent
                                            id='password2'
                                            name='password2'
                                            type='password'
                                            text='Mot de passe de confirmation'
                                            classNameDiv='form-group'
                                            onChange={this.handleChange}
                                        />
                                        <span>{this.state.errors.password2}</span>

                                        <input type='submit' value='envoyer' />
                                    </form>

                                    <p>{this.state.resultAjoutServeur}</p>
                                </div>
                            </Collapse>

                        </div>

                    </div>}
            </div>
        )
    }
}

export default ServeurContainer
