import React, { useEffect, useState } from "react";
import styles from "../categories/categories.module.css";
import './categoryIcons.css' //hoja de estilos solo para los iconos de las categorias
import { Link as Anchor } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import categoryActions from '../../store/categories/actions'
const {getCategories} = categoryActions


function Categories() {

const categories = useSelector(store=>store.categories?.categories)

const dispatch = useDispatch()
 
useEffect(()=>{
  dispatch(getCategories())
},[])


    return(
        <div> 
<section className={styles.container}>
       <div  className={styles.containerCategories}>
        {categories.map((category,index)=>{
          return(
<div key={index} className={"buttonCategory" + index}>{category.name}</div>
          )
        })}
        </div>
      </section>
        </div>
  
    )
}

export default Categories