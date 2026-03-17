import { useEffect, useState } from "react"
import type { ProductType } from "../../types/types"
import { fetchProducts, fetchProductsByCategory } from "../../services/ProductService"
import ProductCard from "./Ui/productCard/ProductCard"
import '../components/Ui/productCard/productCard.css'
import Button from "./Ui/button/Button"
import Category from "./Category/Category"

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
        <Category onSelectCategory={setSelectedCategory} />
      </div>

      <section className="product-section">
        <div className="product-header">
          <h2>Deals of The Day</h2>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="product-container">
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}

        <div className="product-button">
          <Button text="View All Products →" style={{ width: "20%" }} />
        </div>
      </section>
    </>
  );
}