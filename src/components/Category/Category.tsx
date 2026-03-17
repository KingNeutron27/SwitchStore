import { useState } from "react";

import clothes from "../../assets/cloths.webp";
import watches from "../../assets/watches.webp";
import bags from "../../assets/bags.webp";
import shoes from "../../assets/shoes.webp";
import electronics from "../../assets/electronics.webp";
import books from "../../assets/books.webp";
import sports from "../../assets/sports.webp";
import "../Category/Category.css";

const allCategories = [
  { id: 1, name: "Clothes", image: clothes },
  { id: 2, name: "Watches", image: watches },
  { id: 3, name: "Bags", image: bags },
  { id: 4, name: "Shoes", image: shoes },
  { id: 5, name: "Electronics", image: electronics },
  { id: 6, name: "Books", image: books },
  { id: 7, name: "Sports", image: sports },
];

interface CategoryProps {
  onSelectCategory: (category: string) => void;
}

const Category = ({ onSelectCategory }: CategoryProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleClick = (name: string) => {
    setSelectedCategory((prev) => (prev === name ? "all" : name));
    onSelectCategory(name)
  };

  return (
    <div className="category">
      <div className="category__container">
        {allCategories.map((category) => (
          <div
            key={category.id}
            className={`category__card ${selectedCategory === category.name ? "active" : ""} `}
            onClick={() => handleClick(category.name)}
          >
            <div className="category__image">
              <img src={category.image} alt={category.name} />
            </div>
            <p className="category__name">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
