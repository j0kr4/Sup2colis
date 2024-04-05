"use server"

import prisma from "@/prisma/script"

export const getAllPackages = async () => {
    return await prisma.package.findMany({ 
        select: {
            id: true,
            nom: true,
            adresse: true,
            poids: true,
            destination: true,
            trackingId: true,
        }
    })
}
export const createNewPackage = async (newPackage) => {
    return await prisma.package.create({
        data: newPackage,
    })


}

export const getPackage = async (id) => {
    console.log(`Getting package with trackingId: ${id}`)

    const parcel = await prisma.package.findUnique({
        where: {
            id: id,
        },
    })

    console.log(`Package: ${JSON.stringify(parcel)}`)

    return parcel
}