import { writable } from "svelte/store";
import { PrismaClient } from "@prisma/client";

export const cars = writable({})

const prisma = new PrismaClient();

const fetchData = async (name) => {
    const res = await fetch(`https://gta.vercel.app/api/vehicles/${name}`);
    const data = await res.json()

    const cars = await prisma.car.create({
        data: {
            url: data.images.frontQuarter,
            max_speed: data.topSpeed.kmh,
            name: name,
            seats: data.seats
        },
    });
}

// fetchData()