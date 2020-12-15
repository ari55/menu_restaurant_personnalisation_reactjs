import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './container/App'

import TemplateClassiqueContainer from './container/template-classique-container'
import TemplateStandardContainer from './container/template-standard-container'
import ChoixTemplateContainer from './container/choix-template-container'
import ModificationTemplateStandardContainer from './container/modification-template-stantard-container'
import AjouterProduitContainer from './container/ajouter-produit-container'
import AjouterCategorieContainer from './container/ajouter-categorie-container'
import ModifUnFinalContainer from './container/modif-un-final-container'

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

// ReactDOM.render(
//     <ModifUnFinalContainer />,
//     document.getElementById('app')
// )
