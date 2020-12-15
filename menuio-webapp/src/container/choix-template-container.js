import React, { Component } from 'react'
import TemplateStandardComponent from '../component/template-standard-component'
import TemplateClassiqueComponent from '../component/template-classique-component'
import '../css/ChoixTemplateContainer.css'
import HeaderAppContainer from '../container/header-app-container'
import HeaderApp from '../component/header-app'
import { Link } from 'react-router-dom'

class ChoixTemplateContainer extends Component {
    constructor () {
        super()
        this.state = {

        }
    }

    render () {
        return (
            <div className='choix'>
                <div className='headerChoix'>
                    <HeaderAppContainer />
                </div>
                <h3>Veuillez choisir un template pour votre restaurant</h3>
                <div className='bodyChoix'>
                    <div className='choix1'>
                        <a href=''> <h4>Classique</h4></a>
                        <TemplateClassiqueComponent />
                    </div>
                    <div className='choix2'>
                        <Link to='/modifstandard'>  <a href=''> <h4>Standard</h4></a></Link>
                        <TemplateStandardComponent />
                    </div>
                </div>
            </div>
        )
    }
}
export default ChoixTemplateContainer
