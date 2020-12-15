import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import menuiologo from '../images/menui-logo.png'
import Dropdown from 'react-bootstrap/Dropdown'
import '../css/headerApp.css'

class HeaderAppContainer extends Component {
    constructor () {
        super()
        this.state = {
            nomUser: localStorage.getItem('prenom'),
            idUser: localStorage.getItem('idUser')
        }

        this.handleLogout = this.handleLogout.bind(this)
        this.handleGoQrCodePage = this.handleGoQrCodePage.bind(this)
        this.handleGoProfilPage = this.handleGoProfilPage.bind(this)
        this.handleServeurPage = this.handleServeurPage.bind(this)
    }

    handleLogout () {
        localStorage.clear()
        this.props.history.push('/inscription')
    }

    handleGoQrCodePage () {
        this.props.history.push('/qrcode')
    }

    handleGoProfilPage () {
        this.props.history.push('/profil/' + this.state.nomUser)
    }

    handleServeurPage () {
        this.props.history.push('/serveur')
    }

    render () {
        return (
            <div>
                <div className='logoHeader'>
                    <div className=''>
                        <img src={menuiologo} alt='Logo App' />
                    </div>

                    <Dropdown>
                        <Dropdown.Toggle id='dropdown-basic'>
                            {this.state.nomUser}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={this.handleGoProfilPage}>Voir mon profil</Dropdown.Item>
                            <Dropdown.Item onClick={this.handleGoQrCodePage}>Voir mon Qr code</Dropdown.Item>
                            <Dropdown.Item onClick={this.handleServeurPage}>Ajouter un serveur</Dropdown.Item>
                            <Dropdown.Item>Voir le menu</Dropdown.Item>
                            <Dropdown.Item onClick={this.handleLogout}>Deconnexion</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>
            </div>
        )
    }
}

export default withRouter(HeaderAppContainer)
