import React from "react";
import "../productCard/productCard.css";

const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="product-card skeleton-card">
      {/* Image */}
      <div className="product-media">
        <div className="product-img skeleton skeleton-img" />
      </div>

      {/* Content */}
      <div className="product-content">
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-price" />

        <div className="rating-container">
          <div className="skeleton skeleton-stars" />
          <div className="skeleton skeleton-review" />
        </div>
      </div>

      {/* Button */}
      <div className="product-button">
        <div className="skeleton skeleton-button" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;