import { getPackage } from "@/actions/package"

const GetPackage = async ( {params: { slug }}) => {
const id = parseInt(slug)
console.log(id)

    const PackageDetails = await getPackage(id)

    return (
        <div className="max-w-7xl mx-auto">
            <section className="mt-8">
            <table className="table-auto w-full text-left border-collapse border border-black">
                <thead>
                    <tr>
                        <th className="w-1/5 px-4 py-2">Nom du colis</th>
                        <th className="w-1/5 px-4 py-2">Adresse du colis</th>
                        <th className="w-1/5 px-4 py-2">Poids du colis</th>
                        <th className="w-1/5 px-4 py-2">Destination du colis</th>
                        <th className="w-1/5 px-4 py-2">Tracking ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={`w-full cursor-pointer border-t border-gray-300 hover:bg-gray-100`}>
                        <td className="w-1/5 px-4 py-2">{PackageDetails.nom}</td>
                        <td className="w-1/5 px-4 py-2">{PackageDetails.adresse}</td>
                        <td className="w-1/5 px-4 py-2">{PackageDetails.poids}</td>
                        <td className="w-1/5 px-4 py-2">{PackageDetails.destination}</td>
                        <td className="w-1/5 px-4 py-2">{PackageDetails.trackingId}</td>
                    </tr>
                </tbody>
            </table>
            </section>
        </div>
    )
}

export default GetPackage