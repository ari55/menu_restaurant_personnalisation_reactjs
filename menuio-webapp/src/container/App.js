import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Router, IndexRoute } from 'react-router'

import InscriptionFormContainer from '../container/inscription-form-container'
import InscriptionRestoFormContainer from '../container/inscription-resto-form-container'
import Acceuil from '../container/acceuil'
import ConnexionContainer from '../container/connexion-container'
import QrCodePage from '../container/qr-code-page-container'
import ProfilUserContainer from '../container/profil-user-container'
import ChoixTemplateContainer from '../container/choix-template-container'
import ServeurContainer from '../container/serveur-container'
import ModificationTemplateStandardContainer from '../container/modification-template-stantard-container'
import AjouterProduitContainer from '../container/ajouter-produit-container'
import AjouterCategorieContainer from '../container/ajouter-categorie-container'
import EditerCategorie from '../container/editer-categorie-container'
import ModifUnFinalContainer from '../container/modif-un-final-container'
import CartContainer from '../container/cart-container'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ConnexionContainer} />
            <Route path='/inscription' component={ConnexionContainer} />
            <Route path='/connexion' component={ConnexionContainer} />
            <Route path='/acceuil' component={Acceuil} />
            <Route path='/qrcode' component={QrCodePage} />
            <Route path='/profil/:nom' component={ProfilUserContainer} />
            <Route path='/serveur' component={ServeurContainer} />
            <Route path='/modifstandard' component={ModificationTemplateStandardContainer} />
            <Route path='/ajoutProduit/:idcategorie' component={AjouterProduitContainer} />
            <Route path='/ajoutCategorie' component={AjouterCategorieContainer} />
            <Route path='/editerCategorie/:nom/:id' component={EditerCategorie} />
            <Route path='/choix' component={ChoixTemplateContainer} />
            <Route path='/choixfinal' component={ModifUnFinalContainer} />
            <Route path='/cart' component={CartContainer} />
            <Route path='/inforesto' component={InscriptionRestoFormContainer} />

        </Switch>

    </BrowserRouter>
)
export default App
