import React, { Component } from 'react'
import TemplateStandardComponent from '../component/template-standard-component'

class TemplateStandardContainer extends Component {
    constructor () {
        super()
        this.state = {

        }
    }

    render () {
        return (
            <div className=''>
                <TemplateStandardComponent />
            </div>
        )
    }
}
export default TemplateStandardContainer
