import { useEffect, useState } from "react"
import type { ProductType } from "../../types/types"
import { fetchProducts } from "../../services/ProductService"
import ProductCard from "./Ui/ProductCard"


export default function Products() {

    const [products, setProducts] = useState<ProductType[]>([])

    useEffect(() => {
        async function fetchProduct() {
            const data = await fetchProducts();
            setProducts(data)
        }

        fetchProduct()
    }, [])

    return(
        <div>
            {products.map((product) => {
                return(
                    <div key={product.id}>
                        <ProductCard 
                            product={product}  />
                    </div>
                )
            })
        }
        </div>
        
    )
}