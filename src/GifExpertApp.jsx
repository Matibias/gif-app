import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Digimon"]);

  const handleAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories={ setCategories }
        onNewCategory={handleAddCategory}
      />

      {
        categories.map((category) => (
          <GifGrid 
            key={category} 
            category={category} 
          />
        ))
      }
     
    </>
  );
};
