import React, { Component } from 'react'
import HeaderAppContainer from '../container/header-app-container'
const baseUrl = 'https://menuio-app1.herokuapp.com/'
const base2 = 'https://cors-anywhere.herokuapp.com/'
class Acceuil extends Component {
    constructor () {
        super()
        this.state = {
            idUser: localStorage.getItem('idUser'),
            idResto: -1
        }
    }

    // Infos du resto à partir de IdUser
    componentDidMount () {
        const requestOptions = {
            method: 'GET',
            'Access-Control-Allow-Origin': '*'
        }
        fetch(base2 + baseUrl + this.state.idUser, requestOptions)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({ idResto: result.id })
                console.log(this.state.idResto)
                localStorage.setItem('idResto', this.state.idResto)
            })
    }

    render () {
        return (
            <div>
                <HeaderAppContainer />
            </div>
        )
    }
}

export default Acceuil
