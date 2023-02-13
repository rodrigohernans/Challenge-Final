import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import filterCategoriesActions from "../../store/categories/actions";
import styles from "../categories/categories.module.css";
const {filterCategories} = filterCategoriesActions

export default function CategoryButton(props){
    const {id,index,name} = props;
    //console.log(name)
    const [click, setClick] = useState(true);
    const [color,setColor] = useState(false)

    const dispatch = useDispatch()
    let category = useSelector((store)=> store)
console.log(category
    )
    useEffect(()=>{
        if(category>0){
            if(category.includes(id)){
                setColor(!color)
            }
        }
    },[])
    
    const getId = (e) => {
        setClick(!click)
        setColor(!color)
        dispatch(filterCategories(id))
    }

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