import React from "react";
import './buttonFav.css'
import axios, { all } from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import favoritesActions from "../../store/favorites/actions";


const { deleteFav, readFav } = favoritesActions;

const BtnDelete = (props) => {
  let { id } = props;
  let { token } = useSelector((store) => store?.auth);
  let favs = useSelector((store) => store?.favoritesReactions?.fav);
  const dispatch = useDispatch();
  const deletedFavorite = () => {
    console.log(token);
    dispatch(deleteFav({ _id: id, token }));
    dispatch(readFav(token));
  };

  return (
    <div>
    <div
      onClick={deletedFavorite}
      className={`trash`}
      ></div>
    
  </div>
  );
};

export default BtnDelete;





       
       