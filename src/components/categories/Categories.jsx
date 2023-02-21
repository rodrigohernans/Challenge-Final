import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link as Anchor } from "react-router-dom";
import CategoryButton from "./CategoryButton";
import categoryActions from "../../store/categories/actions";
import styles from "../categories/categories.module.css";

const { getCategories } = categoryActions;

function Categories() {
  const categories = useSelector((store) => store?.categories?.categories);

  const dispatch = useDispatch();
  let token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(
      getCategories({
        token,
      })
    );
  }, []);

  return (
    <div  /* className={styles.explorerMenu} */ >
      <section >
           <div /* className={styles.menuOption} */> 
            {categories.map((category, index) => {
              return (
                <CategoryButton 
                  id={category._id}
                  key={index}
                  index={index}
                  name={category.name}
                  /* categoryIcon={ <img
                    className={styles.gameIcon} 
                    src={category.categoryIcon
                    }
                    
                    alt="PhotoGame"
                    
                  />} */
                
                />
              );
            })}
          {/* </div> */}
        </div>
      </section>
    </div>
  );
}

export default Categories;
