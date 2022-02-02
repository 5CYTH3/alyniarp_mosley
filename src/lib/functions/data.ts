import { writable } from "svelte/store";

export const cars = writable({})

const fetchData = async (name) => {
    const res = await fetch(`https://gta.vercel.app/api/vehicles/${name}`);
    const data = await res.json()

    const allData = () => {
        return {
            image: data.images.front,
            name: name,
            topSpeed: data.topSpeed.kmh
        }
    }

    cars.set(allData)

}

// fetchData()