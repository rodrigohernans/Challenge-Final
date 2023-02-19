import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import filterCategoryGamesActions from "../../store/filterCategory/action";
import styles from "../categories/categories.module.css";
import '../categories/buttons.css'
const {filterCategoryGames}= filterCategoryGamesActions


export default function CategoryButton(props){
    const {id,index,name} = props;
    const [click, setClick] = useState(true);
    const [color,setColor] = useState(false)
    const dispatch = useDispatch()
    let category = useSelector((store)=> store?.categories?.categories)
    useEffect(()=>{
        if(category.length>0){
            if(category.includes(name)){
                setColor(!color)
            }
        }
    },[])
    
    const getName = (e) => {
        setClick(!click)
        setColor(!color)
        dispatch(filterCategoryGames(name))
    }
//console.log(category)
    return(
        <div
        onClick={getName}
        id={id}
        className={"buttonCategory" + (index + 1) + (color ? ` active${index + 1}` : "")}
        key={index} >
            {name}
        </div>
    )
}