import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import filterCategoryGamesActions from "../../store/filterCategory/action";
import styles from "../categories/categories.module.css";
import './buttons.css'
const {filterCategoryGames}= filterCategoryGamesActions


export default function CategoryButton(props){
    const {id,index,categoryIcon} = props;
    const [click, setClick] = useState(true);
    const [color,setColor] = useState(false)
    const dispatch = useDispatch()
    let category = useSelector((store)=> store?.categories?.categories)
    console.log(category)

    useEffect(()=>{
        if(category.length>0){
            if(category.includes(categoryIcon)){
                setColor(!color)
            }
        }
    },[])
    
    const getName = (e) => {
        setClick(!click)
        setColor(!color)
        dispatch(filterCategoryGames(categoryIcon))
    }
//console.log(category)
    return(
        <div
        onClick={getName}
        className={"buttonCategory"}
        id={id}
        key={index} >
        { categoryIcon }
        </div>
    )
}