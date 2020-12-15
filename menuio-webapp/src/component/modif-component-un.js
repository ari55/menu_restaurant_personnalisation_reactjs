import React from 'react'
import { Link } from 'react-router-dom'
import panierp from '../images/pa3.png'
import lg from '../images/lg.png'
import '../css/modifUn.css'
const ModifUnComponent = ({ modifierLeStyleMenu, ItemCheckedD, ItemChecked, ItemCheckedC, ItemCheckedB, modifierStyleMenuOne, handleChangeimagelogo, handleChangeimagemenu, urlimagelogo, urlimagemenu, refeC, refeD, refe, refeB, couleurB, couleurC, couleurD, couleurbackgroundtemplate, couleurbackgroundheader, couleurtitrenavigation, reference, couleur, categories, modifierStyleMenu, styleMenu, editCategorie, deleteProduct, handleDeleteProduit, onhandleDeleteCategorie, produitsByResto }) => (

    <div>
        <form onSubmit={modifierLeStyleMenu} id='myForm' encType=''>
            <label>
                <div className='classic' style={{ backgroundColor: couleurC }}>
                    <input
                        type='color'
                        ref={refeC}
                        onChange={ItemCheckedC}
                        className='btnInputColor'
                    />

                    <label>
                        {styleMenu[0]
                            ? <div style={{ backgroundColor: couleurB }} className='headerclassic'>
                                <input
                                    type='color'
                                    ref={refeB}
                                    onChange={ItemCheckedB}
                                    className='btnInputColor'
                                />
                                <div className='logo'>
                                    {styleMenu[0]
                                        ? <div>
                                            <img src={styleMenu[0].url_image_logo} alt='' className='' />

                                          </div>
                                        : <div>
                                            <img src='' alt='' className='' />
                                          </div>}
                                    <div>
                                        <form onSubmit={modifierStyleMenuOne} id='myForm' encType=''>
                                            <input type='file' className='file' style={{ width: '50px' }} accept='image/png, image/jpeg' onChange={handleChangeimagelogo} />
                                            <div className='btn_container'><button type='submit' onClick={modifierStyleMenuOne}>valider</button></div>
                                        </form>
                                    </div>
                                    <p className='hoverme'> Cliquez ici pour changer votre logo </p>
                                </div>

                                <div className='panier'>
                                    <img src={panierp} alt='panierp' className='panierheader' />
                                </div>
                              </div>

                            : <div style={{ background: '#FFFFF 50%' }} className='headerclassic'>
                                <div className='logo'>
                                    <img src={lg} alt='' className='' />
                                    <input type='file' />
                                    <p className='hoverme'> Cliquez ici pour changer votre logo </p>
                                </div>
                                <div className='panier'>
                                    <img src={panierp} alt='panierp' className='' />
                                </div>
                              </div>}
                    </label>

                    <div className='bodyclassic'>
                        <div className='imgMenu'>
                            {styleMenu[0]
                                ? <div>
                                    <img src={styleMenu[0].url_image_menu} alt='' className='' />
                                  </div>
                                : <div>
                                    <img src={lg} alt='' className='' />
                                  </div>}

                            <div>
                                <form onSubmit={modifierStyleMenu} id='myForm' encType=''>
                                    <input type='file' className='file' accept='image/png, image/jpeg' onChange={handleChangeimagemenu} />
                                    <div className='btn_container'><button type='submit' onClick={modifierStyleMenu}>valider</button></div>
                                </form>
                            </div>

                            <p className='hoverme'> Cliquez ici pour changer d'image </p>
                        </div>
                        <div className='categories'>
                            {categories.map((categorie, index) =>
                                <div key={index} className='categoriestandardUn' value={categorie.id}>

                                    <div className='categorietitle' style={{ marginRight: '15px' }}>
                                        <label>
                                            <div style={{ textAlign: 'center', color: couleur }} onClick={ItemCheckedB}>  <h2 className='sectionstandarUn'>{categorie.nom}</h2></div>
                                            <input
                                                type='color'
                                                ref={refe}
                                                onChange={ItemChecked}
                                                className='btnInputColor'
                                            />
                                        </label>
                                        <button onClick={() => onhandleDeleteCategorie(categorie.id)} style={{ width: '50px', height: '40px' }} className='btnSupprimer'>x</button> <Link to={'/editerCategorie/' + categorie.nom + '/' + categorie.id}><button style={{ width: '50px', height: '40px' }} className='btnEditer'>editer</button></Link>
                                    </div>
                                    {produitsByResto.map((produit, index) => {
                                        if (produit.idCategorie === categorie.id) {
                                            return (<div key={index} className='standardproduitUn'>
                                                <div className=''><div className='partie1'><p className='nom'>{produit.nom} </p></div> <p className='Descrip'>{produit.description}</p></div> <div className='partie2'>  <p className='prix'>{produit.prix}$</p></div>
                                                <button onClick={() => handleDeleteProduit(produit.id)} style={{ width: '50px', height: '40px' }} className='btnSupprimer'>x</button> <Link to={'/editerCategorie/' + produit.nom + '/' + produit.id}><button style={{ width: '50px', height: '40px' }} className='btnEditer'>editer</button></Link>
                                                    </div>)
                                        }
                                    }

                                    )}
                                    <div className='btnModifUn'>
                                        <label>
                                            <Link to={'/ajoutProduit/' + categorie.id} style={{ textAlign: 'center', backgroundColor: couleurD }}>
                                                <input
                                                    type='color'
                                                    ref={refeD}
                                                    onChange={ItemCheckedD}
                                                    className='btnInputColor'
                                                />
                                                <button className=''>+</button>

                                            </Link>
                                        </label>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
                <div className='btn_container'> <Link to='/choixfinal'><button type='submit'>Appercu</button></Link><button type='submit' onClick={modifierLeStyleMenu}>Sauvegarder</button></div>
            </label>
        </form>
    </div>

)

export default ModifUnComponent
