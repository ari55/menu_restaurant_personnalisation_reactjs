import React from 'react'

const ModifierCategorie = ({ nomcategori, editerCategorie, getNomCategorie }) => (
    <div className='' style={{ border: '1px solid black', margin: 'auto', textAlign: 'center', marginTop: '200px', marginRight: '200px', marginLeft: '200px' }}>

        <form onSubmit={editerCategorie} id='myForm'>
            <div className='container-input'>
                <label>Nom de la categorie</label>
                <input type='text' defaultValue={nomcategori} onChange={getNomCategorie} required />
            </div>
            <div className='btn_container'><button type='submit'>enregistrer</button></div>

        </form>
    </div>
)

export default ModifierCategorie
