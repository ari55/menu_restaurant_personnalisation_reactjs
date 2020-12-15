import React, { Component } from 'react'
import TemplateClassiqueComponent from '../component/template-classique-component'
import '../css/templateclassique.css'

class TemplateClassiqueContainer extends Component {
    constructor () {
        super()
        this.state = {

        }
    }

    render () {
        return (
            <div className='classiquecontainer'>
                <TemplateClassiqueComponent />
            </div>
        )
    }
}
export default TemplateClassiqueContainer
