import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryButton from "./CategoryButton";
import styles from "../categories/categories.module.css";

const GamesCategories = () => {
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/categories");
      setCategories(response.data.response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div >
      {categories.map((category, index) => {
        return (
          <CategoryButton
          className={styles.buttonCategory}
            index={index}
            key={index}
            categoryIcon={category.categoryIcon}
            
          />
        );
      })}
    </div>
  );
};
export default GamesCategories;
