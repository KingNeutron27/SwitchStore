// import { useState, useEffect } from "react";/

import type { ProductType } from "../../../types/types";

interface ProductCardProps {
  product: ProductType;
}


const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  const { id, title, images, description, price, ratings, category } = product;

  return (
    <article className="product-card" key={id}>
      <img src={images} alt={title} className="product-img" />

      <div className="product-content">
        <h3 className="product-title">{title}</h3>

        <p className="product-description">{description}</p>

        <div className="product-info">
          <span className="product-price">₦{price}</span>

          {/* <span className="product-rating">
            {ratings.length > 0 ? ratings[0].rating : "No rating"}⭐
          </span> */}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;