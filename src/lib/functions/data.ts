import { writable } from "svelte/store";

export const cars = writable([])

const fetchData = async (name) => {
    const res = await fetch(`https://gta.vercel.app/api/vehicles/${name}`);
    const data = await res.json()


    console.log(data.images.front)

    return {
        image: data.images.front,
        name: name,
        topSpeed: data.topSpeed.kmh
    }

}

const fetchAllData = async () => {

    const res = await fetch('https://gta.vercel.app/api/vehicles/all')
    const data = await res.json()
    const treated = Object.entries(data)

    console.log(treated)

    treated.map((data, value) => {
        Object.entries(data).map((dat, val) => {
            return {
                img: dat.images.fronts
            }
        })
    })

}

fetchAllData()