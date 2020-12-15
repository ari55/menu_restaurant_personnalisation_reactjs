import React from 'react'

const AjouterProduitComponent = ({ onFileChangeHandler, fileSelectedHandler, OnHandleSubmit, idpathCategorie, stylemenu, categories, getPrix, getIdCategorie, getNomProduit, getDescription }) => (
    <div className=''>
        <form onSubmit={OnHandleSubmit} id='myForm' encType=''>
            <div className='container-input'>
                <label>Nom de la categorie de produit</label>
                <select onChange={getIdCategorie}>
                    <option selected='true' disabled='disabled'>Choisissez une categorie ici </option>
                    {categories.map((categorie, index) => <option key={index} value={categorie.id}>{categorie.nom}</option>)}
                </select>
            </div>
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
            <input type='file' id='image' accept='image/png, image/jpeg' onChange={fileSelectedHandler} />

            <div className='btn_container'><button type='submit' onClick={OnHandleSubmit}>Enregistrer</button></div>
        </form>

    </div>
)

export default AjouterProduitComponent
