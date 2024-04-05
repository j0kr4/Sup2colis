"use server"

import { getAllPackages, createNewPackage } from "@/actions/package"
import { revalidatePath } from "next/cache"

const AddPackageForm = async () => {

    const allPackages = await getAllPackages()

    const submit = async (data) => {
        "use server"

        const newPackage = await createNewPackage({
            nom: data.get('nom'),
            adresse: data.get('adresse'),
            poids: parseFloat(data.get('poids')),
            destination: data.get('destination'),
            trackingId: data.get('trackingId'),
        })

        revalidatePath('/package')
        console.log('Colis ajouté')
    }

    return (
        <form action={submit} className="flex flex-col space-y-4 w-full max-w-md mx-auto mt-8">
            <input type="text" name="nom" placeholder="Nom du colis" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" name="adresse" placeholder="Adresse du colis" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="number" name="poids" step="0.01" placeholder="Poids du colis" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" name="destination" placeholder="Destination du colis" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" name="trackingId" placeholder="Tracking ID" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Ajouter le colis</button>
        </form>
    )
}

export default AddPackageForm