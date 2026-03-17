import { useEffect, useState } from "react"
import type { ProductType } from "../../types/types"
import { fetchProducts, fetchProductsByCategory } from "../../services/ProductService"
import ProductCard from "./Ui/productCard/ProductCard"
import '../components/Ui/productCard/productCard.css'
import Button from "./Ui/button/Button"
import Category from "./Category/Category"
import ProductCardSkeleton from "../components/Ui/productCard/ProductSkeleton"

const categoryMap: Record<string, string> = {
  Clothes: "womens-dresses",
  Watches: "mens-watches",
  Bags: "womens-bags",
  Shoes: "womens-shoes",
  Electronics: "smartphones",
  Books: "laptops",
  Sports: "sports-accessories",
};

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);

      if (selectedCategory === "all") {
        const data = await fetchProducts();
        setProducts(data);
      } else {
        const slug = categoryMap[selectedCategory] ?? selectedCategory.toLowerCase();
        const data = await fetchProductsByCategory(slug);
        setProducts(data);
      }

      setLoading(false);
    }

    fetchProduct();
  }, [selectedCategory]);

  return (
    <>
      <div className="product-category">
        <div className="category-header">
            <h2>Category</h2>
        </div>

        <Category onSelectCategory={setSelectedCategory} />
      </div>

      <section className="product-section">
        <div className="product-header">
            {(selectedCategory === "all") ?
                <h2>Deals of The Day</h2>
                  : 
                <h2> Deals for {selectedCategory}</h2>
            }
        </div>

        {loading ? (
  <div className="product-container">
    {Array.from({ length: 8 }).map((_, i) => (
      <ProductCardSkeleton key={i} />
    ))}
  </div>
) : products.length === 0 ? ( 
          <p>No products found.</p>
        ) : (
          <div className="product-container">
            {products.map((product) => (
              <div key={product.id} >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}

        <div className="product-button">
          <Button text="View All Products →" style={{ width: "clamp(120px, 30%, 260px)", cursor: 'pointer' }} onClick={() => products} />
        </div>
      </section>
    </>
  );
}