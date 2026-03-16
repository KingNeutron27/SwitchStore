import type { ProductType } from "../types/types"


export async function fetchProducts() : Promise<ProductType[]> {
    try {
        const response = await fetch("https://dummyjson.com/products")

        if (!response.ok) {
            throw new Error ('failed to fetch products')
        }
        const data = await response.json()

        return data.products as ProductType[]

    } catch(error) {
        console.error("this is the error it is showing", error)
        return []
    }
}