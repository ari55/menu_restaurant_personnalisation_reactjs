import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import InputComponent from '../component/input-component'
import menuiologo from '../images/menui-logo.png'
import '../css/inscription.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const baseUrl = 'https://menuio-app1.herokuapp.com/'
const base2 = 'https://cors-anywhere.herokuapp.com/'
class ConnexionContainer extends Component {
    constructor () {
        super()
        this.state = {
            valuesForm: {},
            login: false,
            error: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event) {
        this.setState({
            valuesForm: Object.assign(this.state.valuesForm, { [event.target.name]: event.target.value })
        })
    }

    handleSubmit (event) {
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.valuesForm)
        }
        console.log(this.state.valuesForm)

        fetch(base2 + baseUrl + 'connexion', requestOptions)
            .then((response) => {
                if (response.status < 200 || response.status >= 300) {
                    this.setState({ error: 'Les informations entrées sont incorrectes !!!' })
                    console.log(response)
                    throw new Error(response.statusText)
                }
                return response.json()
            })
            .then((result) => {
                // console.log(result.headers.get('token'))

                //  localStorage.setItem('login', result.headers.get('token'))
                localStorage.setItem('prenom', result.prenom)
                localStorage.setItem('idUser', result.id)
                this.setState({ login: true })
                console.log(JSON.stringify(result.token))
                console.log(result.prenom)
            })
            .then((data) => {
                // console.log('vraiiiii')

                console.log(data)
                // var data = JSON.parse(urlResponse.getContentText());
                // Logger.log(data.accessToken);
            })
            // .then((result) => {
            //     localStorage.setItem('login', JSON.stringify({
            //         login: true,
            //         token: result.accessToken
            //     }))
            //     localStorage.setItem('prenom', result.prenom)
            //     localStorage.setItem('idUser', result.id)
            //     this.setState({ login: true })
            //     console.log(JSON.stringify(result.token))
            //     console.log(result.prenom)
            // })
    }

    render () {
        // localStorage.clear()

        if (this.state.login) {
            return <Redirect to='/choix' />
        }

        return (
            <div>
                <div className='header'>
                    <img src={menuiologo} alt='Logo de menuio' />
                    <Link to='/inscription'><button>Inscription</button></Link>
                </div>

                <div>
                    <div>
                        <h1>Connexion</h1>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <InputComponent
                            id='email'
                            name='email'
                            type='text'
                            text='E-mail (votre e-mail personnel)'
                            classNameDiv='form-group'
                            onChange={this.handleChange}
                        />
                        <InputComponent
                            id='passwords'
                            name='passwords'
                            type='password'
                            text='Mot de passe '
                            classNameDiv='form-group'
                            onChange={this.handleChange}
                        />

                        <div className='text-center'>
                            <input type='submit' value='Se connecter' />
                        </div>
                        <span>{this.state.error}</span>

                    </form>

                </div>

            </div>
        )
    }
}

export default ConnexionContainer
