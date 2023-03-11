import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) return;

    setCategories([ newCategory, ...categories ])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        // setCategories={ setCategories } 
        onNewCategory={handleAddCategory}
        />

      <ul>
        {
        categories.map( category => {
          return <li key={category}>{category}</li>;
        })
        }
      </ul>
    </>
  );
};
