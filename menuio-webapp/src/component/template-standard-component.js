import React from 'react'
import panierp from '../images/panierp.png'
import lg from '../images/lg.png'
import '../css/templateclassique.css'
import '../css/templatestandard.css'

const TemplateStandardComponent = () => (
    <div className='classic'>
        <div className='headerclassic'>
            <div className='logo'>
                <img alt='Logo Restaurant' className='' />
                <p />
            </div>
            <div className='panier'>
                <img src={panierp} alt='panierp' className='' />
            </div>
        </div>
        <div className='bodyclassic'>
            <div className='imgMenu'>
                <img src={lg} alt='' className='' />
            </div>
            <div className='categories'>
                <div className='categoriestandard'>
                    <h2 className='sectionstandard'>Categorie1</h2>
                    <div className='standardproduit'>
                        <div><p>Produit1</p> <p>Description</p></div>  <p>prix</p> <button>+</button>
                    </div>
                    <div className='standardproduit'>
                        <div><p>Produit2</p> <p>Description</p></div>  <p>prix</p> <button>+</button>
                    </div>
                    <div className='standardproduit'>
                        <div><p>Produit3</p> <p>Description</p></div>  <p>prix</p> <button>+</button>
                    </div>
                </div>
                <hr className='hr' />
                <div className='categoriestandard'>
                    <h2 className='sectionstandard'>Categorie2 </h2>
                    <div className='standardproduit'>
                        <div><p>Produit1</p> <p>Description</p></div>  <p>prix</p> <button>+</button>
                    </div>
                    <div className='standardproduit'>
                        <div><p>Produit2</p> <p>Description</p></div>  <p>prix</p> <button>+</button>
                    </div>
                    <div className='standardproduit'>
                        <div><p>Produit3</p> <p>Description</p></div>  <p>prix</p> <button>+</button>
                    </div>
                </div>
                <div className='categoriestandard'>
                    <h2 className='sectionstandard'>Categorie3 </h2>
                    <div className='standardproduit'>
                        <div><p>Produit1</p> <p>Description</p></div>  <p>prix</p> <button>+</button>
                    </div>
                    <div className='standardproduit'>
                        <div><p>Produit2</p> <p>Description</p></div>  <p>prix</p> <button>+</button>
                    </div>
                    <div className='standardproduit'>
                        <div><p>Produit3</p> <p>Description</p></div>  <p>prix</p> <button>+</button>
                    </div>
                </div>
                <hr className='hr' />
                <div className='categoriestandard'>
                    <h2 className='sectionstandard'>Categorie4 </h2>
                    <div className='standardproduit'>
                        <div><p>Produit1</p> <p>Description</p></div>  <p>prix</p> <button>+</button>
                    </div>
                    <div className='standardproduit'>
                        <div><p>Produit2</p> <p>Description</p></div>  <p>prix</p> <button>+</button>
                    </div>
                    <div className='standardproduit'>
                        <div><p>Produit3</p> <p>Description</p></div>  <p>prix</p> <button>+</button>
                    </div>
                </div>

                <div className='categoriestandard'>
                    <h2 className='sectionstandard'>Categorie5 </h2>
                    <div className='standardproduit'>
                        <div><p>Produit1</p> <p>Description</p></div>  <p>prix</p> <button>+</button>
                    </div>
                    <div className='standardproduit'>
                        <div><p>Produit2</p> <p>Description</p></div>  <p>prix</p> <button>+</button>
                    </div>
                    <div className='standardproduit'>
                        <div><p>Produit3</p> <p>Description</p></div>  <p>prix</p> <button>+</button>
                    </div>
                    <div className='standardproduit'>
                        <div><p>Produit4</p> <p>Description</p></div>  <p>prix</p> <button>+</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

)
export default TemplateStandardComponent
