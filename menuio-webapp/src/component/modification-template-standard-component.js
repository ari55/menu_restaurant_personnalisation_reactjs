import React from 'react'
import { Link } from 'react-router-dom'
import panierp from '../images/panierp.png'
import lg from '../images/lg.png'
import '../css/templateclassique.css'
import '../css/templatestandard.css'
import EdiText from 'react-editext'

const ModificationTemplateStandardComponent = ({ OnHandleSave }) => (

    <div className='classic'>
        <div style={{ background: '#41B562 50%' }} className='headerclassic'>
            <div className='logo'>
                <img alt='Logo Restaurant' className='' />
                <p className='hoverme'> Clickez ici pour changer votre logo </p>
            </div>
            <div className='panier'>
                <img src={panierp} alt='panierp' className='' />
            </div>
        </div>
        <div className='bodyclassic'>
            <div className='imgMenu'>
                <img src={lg} alt='' className='' />
                <p className='hoverme'> Clickez ici pour changer d'image </p>
            </div>
            <div className='categories'>
                <div className='categoriestandard'>
                    <EdiText className='sectionstandard' type='text' onChange={OnHandleSave} value='Categorie1'> </EdiText>
                    <div className='standardproduit'>
                        <div><p>Produit1</p> <p>Description</p></div>  <p>prix</p> <button>+</button>
                    </div>

                </div>
                <hr className='hr' />
                <div className='categoriestandard'>
                    <EdiText className='sectionstandard' place onSave='' type='text' value='Categorie2'> </EdiText>
                    <div className='standardproduit'>

                        <div><p>Produit1</p> <p>Description</p></div>  <p>prix</p> <button>+</button>
                    </div>

                </div>
                <div className='categoriestandard'>
                    <EdiText className='sectionstandard' type='text' onSave='' value='Categorie3'> </EdiText>
                    <div className='standardproduit'>
                        <div><p>Produit1</p> <p>Description</p></div>  <p>prix</p> <button>+</button>
                    </div>

                </div>
            </div>
        </div>

    </div>

)

export default ModificationTemplateStandardComponent
