import React from "react";
import type { ProductType } from "../../../../types/types";
import "../productCard/productCard.css";
import Button from "../button/Button";

interface ProductCardProps {
  product: ProductType;
  onClick?: (id: number) => void;
}

const getPrimaryImage = (images: string | string[]) => {
  if (!images) return "";
  return Array.isArray(images) ? images[0] ?? "" : images;
};

const formatCurrency = (amount: number, currency = "USD", locale = "en-US") =>
  new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount);

const Stars: React.FC<{ value?: number }> = ({ value = 0 }) => {
  const v = Math.max(0, Math.min(5, value));
  const full = Math.floor(v);
  const half = v - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;

  return (
    <div className="product-stars" aria-label={`Rating: ${v.toFixed(1)} out of 5`}>
      <span aria-hidden="true" className="stars">
        {Array.from({ length: full }).map((_, i) => (
          <span key={`full-${i}`} className="star filled">★</span>
        ))}
        {half === 1 && <span className="star half">⯨</span>}
        {Array.from({ length: empty }).map((_, i) => (
          <span key={`empty-${i}`} className="star empty">★</span>
        ))}
      </span>
    </div>
  );
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { id, title, images, price, reviews } = product;

  const imgSrc = getPrimaryImage(images);
  const firstRating = reviews?.[0]?.rating ?? 0;

  return (
    <div
      className="product-card"
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : -1}
      onClick={() => onClick?.(id)}
      onKeyDown={(e) =>
        onClick && (e.key === "Enter" || e.key === " ") && onClick(id)
      }
      aria-label={`${title} product card`}
    >
      <div className="product-media">
        {imgSrc ? (
          <img src={imgSrc} alt={title} className="product-img" />
        ) : (
          <div className="product-img placeholder" aria-label="No image available">
            No image
          </div>
        )}
      </div>

      <div className="product-content">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">
          <strong>Price: </strong>
          {formatCurrency(price)}
        </p>
        <div className="rating-container">
          <div className="product-rating-row">
            <Stars value={firstRating} />
          </div>
          <span className="review-count">
            ({reviews.length} {reviews.length > 1 ? "Reviews" : "Review"})
          </span>
        </div>
      </div>

      <div className="product-button">
        <Button text="View Details" />
      </div>
    </div>
  );
};

export default ProductCard;