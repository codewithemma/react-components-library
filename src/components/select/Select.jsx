"use client";
import React, { useState } from "react";

const App = () => {
  const [category, setCategory] = useState("");
  const [items, setItems] = useState([]);

  const categories = {
    cars: ["Toyota", "Honda", "Ford"],
    planes: ["Boeing", "Airbus", "Cessna"],
    bikes: ["Harley Davidson", "Ducati", "Kawasaki"],
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    setItems(categories[selectedCategory] || []);
  };

  return (
    <>
      <select value={category} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        <option value="cars">Cars</option>
        <option value="planes">Planes</option>
        <option value="bikes">Bikes</option>
      </select>
      <select>
        <option value="">Select an item</option>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default App;
