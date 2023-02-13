import './categoryIcons.css' //hoja de estilos solo para los iconos de las categorias

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link as Anchor } from "react-router-dom";
import categoryActions from '../../store/categories/actions'
import styles from "../categories/categories.module.css";

const {getCategories} = categoryActions


function Categories() {

const categories = useSelector(store=>store.categories?.categories)

const dispatch = useDispatch()

let token = localStorage.getItem("token")
 
useEffect(()=>{
  dispatch(getCategories({
    token
  }))
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