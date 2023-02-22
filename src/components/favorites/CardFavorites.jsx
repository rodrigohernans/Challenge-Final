import React from "react";
import styles from "./favorites.module.css";
import favoritesActions from '../../store/favorites/actions'
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { Link as Anchor } from "react-router-dom";
import { useParams } from "react-router-dom";
import gamesActions from "../../store/games/action";
import BtnFav from '../favorites/BtnFav'
import BtnFavDelete from '../favorites/BtnFavDelete'

const { addFav,readFav} = favoritesActions;
const { getGame } = gamesActions;

function CardFavorites() {
  const dispatch = useDispatch();
  const { id } = useParams();
  let { token } = useSelector((store) => store?.auth);
 let favs = useSelector((store)=>store?.favoritesReactions.fav)
 const gameStore = useSelector((store) => store?.games);
 console.log(favs) 


const boton =()=>{
  const limit = favs.response.length
  console.log(limit)
  if(limit<1){
    return <div className={styles.noFavorites}>Add yours favorites here</div>
  } else{
    return(
favs.response?.map((fav)=> (
 <section className={styles.card}>
  <Anchor className={styles.anchorImg} to={`/details/${fav.game_id._id}`}> <img
          className={styles.img}
          src={fav?.game_id?.image}
          alt=""
        /></Anchor>
       

        <div className={styles.data}>
          {" "}
          <p className={styles.title}>{fav?.game_id?.title}</p>
          <div className={styles.allButtons}>
            <div className={styles.buttons}>
    {/*        {console.log(fav._id)} */}
    
              <img
                className={styles.cart}
                src="../../assets/shopIcon.png"
                alt=""
              />
            </div>
            <button className={styles.price}>${fav?.game_id?.price}</button>
          </div>
        </div>
        
      </section>))
    )
  }
}


useEffect(()=>{
  dispatch(readFav(token))
},[token])

useEffect(() => {
  if (gameStore) {
    console.log("funciona");
    dispatch(getGame(id));
  } else {
    console.log("no funciona");
  }
}, [token]);



  return (
    <div className={styles.container}>
{boton()}
      
      
    </div>
  );
}

export default CardFavorites;
