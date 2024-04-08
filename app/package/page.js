"use server"

import AddPackageForm from "../components/add-package-form"
import AllPackageList from "../components/all-package-list"

const PackagePage = async () => {

    return (
        <main>
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-center mt-8" style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>Bienvenue sur le système de gestion de colis Sup2Colis</h1>
            {/* Formulaire d'ajout de post */}
            <AddPackageForm/>

            {/* Afficher tout les articles/posts */}
            <AllPackageList/>

        </main>
    )
}

export default PackagePage