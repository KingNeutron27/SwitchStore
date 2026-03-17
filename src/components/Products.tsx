import { useEffect, useState } from "react"
import type { ProductType } from "../../types/types"
import { fetchProducts } from "../../services/ProductService"
import ProductCard from "./Ui/productCard/ProductCard"
import '../components/Ui/productCard/productCard.css'
import Button from "./Ui/button/Button"
import Category from "./Category/Category"


export default function Products() {
  const [products, setProducts] = useState<ProductType[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("all");


  useEffect(() => {
    async function fetchProduct() {
      const data = await fetchProducts();
      setProducts(data);
    }

    fetchProduct();
  }, []);

    return(
        <>
        <div className="product-category">
            <Category onSelectCategory={setSelectedCategory} />
        </div>
        
        <section className="product-section">
            <div className="product-header">
                <h2>Deals of The Day</h2>
            </div>
            
            <div className="product-container">
                
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
            <div className="product-button">
                    <Button text="View All Products →" style={{width: "20%"}} />
            </div>
            
        
        </section>

        </>
        
    )
}
