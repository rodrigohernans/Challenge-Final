import axios from "axios";
import favoritesActions from "../../store/favorites/actions";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect,useState } from "react";
import gamesActions from "../../store/games/action";
import './buttonFav.css'


const { addFav } = favoritesActions;

const Btn = (props) => {
  const game_id = { game_id: props };
  let { token } = useSelector((store) => store?.auth);
  let favs = useSelector((store) => store?.favoritesReactions?.fav);
  //console.log(game_id.game_id);
  const dispatch = useDispatch();
 const [color,setColor] = useState(false) 

useEffect(() => {
  const storageColor = localStorage.getItem(`fav_${props}`);
  if (storageColor) {
    setColor(JSON.parse(storageColor));
  }
}, [props,token]);

// Actualizar el estado en localStorage cada vez que cambia el color
useEffect(() => {
  localStorage.setItem(`fav_${props}`, JSON.stringify(color));
}, [color, props,token]);

const createReaction = () => {
  dispatch(addFav({ game_id: game_id.game_id, token }));
  setColor(!color);
};

return (
  <div>
    <div
      onClick={createReaction}
      className={color ? `FavActive` : `fav`}
      ></div>
    
  </div>
);
};
export default Btn;

       
       
 