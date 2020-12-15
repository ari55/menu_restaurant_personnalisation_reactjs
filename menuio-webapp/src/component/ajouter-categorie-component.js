import React from 'react'
import '../css/ajoutCategorie.css'

const AjouterCategorieComponent = ({ OnHandleSubmit, OnHandleSubmitCategorie, getNomCategorie, getPrix, getIdCategorie, getNomProduit, getDescription }) => (
    <div className='inscription-component'>

        <form onSubmit={OnHandleSubmitCategorie} id='myForm'>

            <div className='container-input'>
                <label>Nom de la categorie</label>
                <input type='text' onChange={getNomCategorie} required />
            </div>
            <div className='btn_container'><button type='submit' onClick={OnHandleSubmitCategorie}>Ajouter</button></div>

        </form>
        <h2>Ajoutez des produits a cette categorie</h2>

        <form onSubmit={OnHandleSubmit} id='myForm'>
            <div className='container-input'>
                <label>Nom</label>
                <input type='text' onChange={getNomProduit} required />
            </div>

            <div className='container-input'>
                <label>Description</label>
                <input type='text' onChange={getDescription} required />
            </div>
            <div className='container-input'>
                <label>Prix</label>
                <input type='text' onChange={getPrix} required />
            </div>
            <div>
                <p>Ajoutez une image a ce produit</p>
                <img alt='image' />
            </div>
            <div className='btn_container'><button type='submit' onClick={OnHandleSubmit}>Enregistrer</button></div>

        </form>
    </div>
)

export default AjouterCategorieComponent
