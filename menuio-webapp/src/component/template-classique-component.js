import React from 'react'
import panierp from '../images/panierp.png'
import '../css/templateclassique.css'
const TemplateClassiqueComponent = () => (
    <div className='classic'>
        <div className='headerclassic'>
            <div className='logo'>
                <img alt='Logo Restaurant' className='monlogo' />
            </div>
            <div className='panier'>
                <img src={panierp} alt='panierp' className='' />
            </div>
        </div>
        <div className='navigation'>
            <ul>
                <li>Toutes</li>
                <li>categorie1</li>
                <li>categorie2</li>
                <li>categorie3</li>
                <li>categorie4</li>
                <li>categorie5</li>
            </ul>
        </div>
        <div className='bodyclassic'>
            <div> <h3>Menu</h3></div>

            <div>
                <h2 className='section'>Categorie1</h2>
                <div className='classicproduit'>
                    <div><p>Produit1</p> <p>Description</p></div>  <p>prix</p> <button>Ajouter</button>
                </div>
                <div className='classicproduit'>
                    <div><p>Produit2</p> <p>Description</p></div>  <p>prix</p> <button>Ajouter</button>
                </div>
                <div className='classicproduit'>
                    <div><p>Produit3</p> <p>Description</p></div>  <p>prix</p> <button>Ajouter</button>
                </div>
            </div>

            <div>
                <h2 className='section'>Categorie2 </h2>
                <div className='classicproduit'>
                    <div><p>Produit1</p> <p>Description</p></div>  <p>prix</p> <button>Ajouter</button>
                </div>
                <div className='classicproduit'>
                    <div><p>Produit2</p> <p>Description</p></div>  <p>prix</p> <button>Ajouter</button>
                </div>
                <div className='classicproduit'>
                    <div><p>Produit3</p> <p>Description</p></div>  <p>prix</p> <button>Ajouter</button>
                </div>
            </div>
            <div>
                <h2 className='section'>Categorie3 </h2>
                <div className='classicproduit'>
                    <div><p>Produit1</p> <p>Description</p></div>  <p>prix</p> <button>Ajouter</button>
                </div>
                <div className='classicproduit'>
                    <div><p>Produit2</p> <p>Description</p></div>  <p>prix</p> <button>Ajouter</button>
                </div>
                <div className='classicproduit'>
                    <div><p>Produit3</p> <p>Description</p></div>  <p>prix</p> <button>Ajouter</button>
                </div>
            </div>
        </div>

    </div>

)
export default TemplateClassiqueComponent
