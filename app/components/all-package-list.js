import { getAllPackages } from "@/actions/package"
import Link from "next/link"

const AllPackageList = async () => {

    const allPackages = await getAllPackages()

    if (allPackages.length === 0) {
        return <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mt-16">No packages found</h2>;
    }

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
                    {
                        allPackages.map((parcel, index) => (
                                <tr className={`w-full cursor-pointer border-t border-gray-300 ${index % 2 === 0 ? 'bg-gray-200' : ''} hover:bg-gray-100`} key={index}>
                                    <td className="w-1/5 px-4 py-2"><Link href={`/package/${parcel.id}`}>{parcel.nom}</Link></td>
                                    <td className="w-1/5 px-4 py-2"><Link href={`/package/${parcel.id}`}>{parcel.adresse}</Link></td>
                                    <td className="w-1/5 px-4 py-2"><Link href={`/package/${parcel.id}`}>{parcel.poids}</Link></td>
                                    <td className="w-1/5 px-4 py-2"><Link href={`/package/${parcel.id}`}>{parcel.destination}</Link></td>
                                    <td className="w-1/5 px-4 py-2"><Link href={`/package/${parcel.id}`}>{parcel.trackingId}</Link></td>
                                </tr>
                        ))
                    }
                </tbody>
            </table>
            </section>
        </div>
    )
}

export default AllPackageList