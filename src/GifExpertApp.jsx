import { useState } from "react"
import { AddCategory, GiftGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Darth Vader']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory 
        onNewCategory={event => onAddCategory(event)}
      />      
      { categories.map( (category) => (
          <GiftGrid 
            key={category} 
            category={category}
          />            
        )) 
      }      
    </>
  )
}