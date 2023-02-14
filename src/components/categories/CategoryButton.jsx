import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import categoryActions from "../../store/categories/actions";
import filterCategoryGamesActions from "../../store/filterCategory/action";
import styles from "../categories/categories.module.css";
const {getCategories} = categoryActions
const {filterCategoryGames}= filterCategoryGamesActions

export default function CategoryButton(props){
    const {id,index,name} = props;
    //console.log(id)
    const [click, setClick] = useState(true);
    const [color,setColor] = useState(false)

    const dispatch = useDispatch()
    let category = useSelector((store)=> store.categories.categories)
//console.log(category)
    useEffect(()=>{
        if(category.length>0){
            if(category.includes(id)){
                setColor(!color)
            }
        }
    },[])
    
    const getId = (e) => {
        setClick(!click)
        setColor(!color)
        dispatch(filterCategoryGames(id))
    }
//console.log(category)
    return(
        <div
        onClick={getId}
        id={id}
        className={styles.buttonCategory}
        key={index} >
            {name}
              
              </div>
    )
}