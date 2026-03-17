import { useEffect, useState } from "react";
import type { ProductType } from "../../types/types";
import { fetchProducts } from "../../services/ProductService";
import ProductCard from "./Ui/ProductCard";
import Category from "./Category/Category";

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

  return (
    <div>
      <div>
        <Category onSelectCategory={setSelectedCategory} />
      </div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
  );
}
