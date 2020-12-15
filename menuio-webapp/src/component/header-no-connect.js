import React from 'react'
import { Link } from 'react-router-dom'
import menuiologo from '../images/menui-logo.png'

const HeaderNoConnect = () => (
    <div className='header'>
        <img src={menuiologo} alt='Logo de menuio' />
        <Link to='/connexion'><button>Connexion</button></Link>
    </div>
)

export default HeaderNoConnect
