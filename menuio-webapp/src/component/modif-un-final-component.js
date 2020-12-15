import React from 'react'
import { Link } from 'react-router-dom'
import panierp from '../images/pa3.png'
import lg from '../images/lg.png'
import '../css/modifUn.css'
import '../css/modifUnFinal.css'
import { formatNumber } from '../helpers/utils'

const ModifUnFInalComponent = ({ couleurTitreCategorie, countCart, getItem, x, addProduct, addToCart, handleInputChange, imagemenu, produits, categories, imagelogo, couleurbackgroundheader, couleurtitrenav, couleuBackgroundTemplate }) => {
    return (
        <div className='classicUn' style={{ backgroundColor: couleuBackgroundTemplate, marginLeft: '50px', marginRight: '50px' }}>
            <div style={{ backgroundColor: couleurbackgroundheader }} className='headerclassicUn'>

                <div className='logo'>
                    <div>
                        <img src={imagelogo} alt='' className='' />

                    </div>
                </div>

                <div className='panier'>
                    <p style={{ marginLeft: '85px' }}>{countCart}</p>
                    <Link to='/cart'>   <img src={panierp} alt='panierp' className='panierheader' /></Link>
                </div>
            </div>
            <div className='bodyclassic'>
                <div className='imgMenu'>
                    <div>
                        <img src={imagemenu} alt='' className='' />
                    </div>
                </div>
                <div className='categories'>
                    {categories.map((categorie, index) =>
                        <div key={index} className='categoriestandardUn' value={categorie.id}>

                            <div className='categorietitle' style={{ marginRight: '15px' }}>
                                <div style={{ textAlign: 'center', color: couleurTitreCategorie }}>  <h2 className='sectionstandarUn'>{categorie.nom}</h2></div>

                            </div>
                            {produits.map((produit, index) => {
                                if (produit.idCategorie === categorie.id) {
                                    return (<div key={index} className='standardproduitUn'>
                                        <div className=''><div className='partie1'><p className='nom'>{produit.nom} </p></div> <p className='Descrip'>{produit.description}</p></div> <div className='partie2'>  <p className='prix'>{formatNumber(produit.prix)}</p></div>
                                        <button onClick={() => addToCart(produit)} style={{ width: '20px', height: '30px' }} className='btnEditer'>+</button>  <button className='btnSupprimer' style={{ width: '20px', height: '30px' }}>x</button>
                                    </div>)
                                }
                            }

                            )}

                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default ModifUnFInalComponent
