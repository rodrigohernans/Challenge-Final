import React, { useEffect, useState } from "react";
import styles from "../categories/categories.module.css";
import { Link as Anchor } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import categoryActions from "../../store/categories/actions";
import CategoryButton from "./CategoryButton";
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
    <div>
      <section className={styles.container}>
        <div className={styles.containerCategories}>
          <div className={styles.containericons}>
        <img className={styles.icon} src="../../assets/shooterIcon.png" alt="" />
        <img className={styles.icon} src="../../assets/adventureIcon.png" alt="" />
        <img className={styles.icon} src="../../assets/sportsIcon.png" alt="" />
        <img className={styles.icon} src="../../assets/rpgIcon.png" alt="" />
        <img className={styles.icon} src="../../assets/estrategyIcon.png" alt="" />

          </div>
          <div className={styles.containerTitle}>
          {categories.map((category, index) => {
            return (
             
          <CategoryButton 
          id={category._id}
          key={index}
          index={index}
          name={category.name}
          />
            );
          })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Categories;
