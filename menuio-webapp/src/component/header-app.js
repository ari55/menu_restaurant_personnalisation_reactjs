import React from 'react'
import menuiologo from '../images/menui-logo.png'
import Dropdown from 'react-bootstrap/Dropdown'

const HeaderApp = ({ nomUser, onClickLogout, onClickQrCode }) => (
    <div className='logoHeader'>
        <div className=''>
            <img src={menuiologo} alt='Logo App' />
        </div>

        <Dropdown>
            <Dropdown.Toggle id='dropdown-basic'>
                {nomUser}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>Voir mon profil</Dropdown.Item>
                <Dropdown.Item onClick={onClickQrCode}>Voir mon Qr code</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>Ajouter un serveur</Dropdown.Item>
                <Dropdown.Item onClick={onClickLogout}>Deconnexion</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

    </div>
)

export default HeaderApp
