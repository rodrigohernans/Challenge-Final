import React from "react";
import styles from "./AllGamesCards.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import allGamesActions from "../../store/allGames/actions";

const { getAllGames } = allGamesActions

const GamesCards = () => {
  
  let games = useSelector((store)=>store.allgames?.allgames?.length)
  console.log(games)
  let dispacth = useDispatch()
  
  useEffect(()=>{
    dispacth(getAllGames())
  },[])
  
  
  return(
    <div className={styles.conteiner}>
      <div className={styles.carrusel}>
        <img src="https://www.freetogame.com/g/157/thumbnail.jpg" alt="" className={styles.carrusel}/>
      </div>
      <section className={styles.sectionCategories} >
        <div className={styles.divCategories}>
          <p>Categories</p>
          <img src="https://media.istockphoto.com/id/1098183024/vector/marksman-sharpshooter.jpg?s=612x612&w=0&k=20&c=EmpOAVoPe5gPX3PVJ_shpACO5R5suMw3SEVqF6_XSJI=" alt="" className={styles.fotosIcono}/>
          <img src="https://as2.ftcdn.net/v2/jpg/04/39/88/35/1000_F_439883507_ijc9r1ive2vMNBVNM8ZvWcuQscSM1gYa.jpg" alt="" className={styles.fotosIcono}/>
          <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sports-logo-sports-and-gaming-logo-design-template-ed37d28efcabf0eea83a1da868b6f4bb_screen.jpg?ts=1662476515" alt="" className={styles.fotosIcono}/>
          <img src="https://i.pinimg.com/736x/d4/a1/3a/d4a13a8cea829f4d281bf54a7a1837f2.jpg" alt="" className={styles.fotosIcono}/>
          <img src="https://thumbs.dreamstime.com/z/icono-linear-del-juego-de-la-estrategia-estafa-moderna-logotipo-esquema-133526525.jpg" alt="" className={styles.fotosIcono}/>
        </div>
        <div className={styles.divSearch}>
          <input type="text" 
          placeholder="Find your games here"
          className={styles.input}
          />
          <div className={styles.divSearch}>
          <img src="https://t3.ftcdn.net/jpg/04/99/34/78/360_F_499347841_IXq0bLOPN4MkKAa71nP3WMQq6LVlgeTO.jpg" alt="" className={styles.search}/>
          </div>
        </div>
      </section>
      <section className={styles.sectionCards}>
        <div className={styles.cards}>
          <img src="https://www.freetogame.com/g/520/thumbnail.jpg" alt="" className={styles.fotos}/>
          <div className={styles.cardsAcomodo}>
          <h2>Roller Champions</h2>
          <img src="https://cdn-icons-png.flaticon.com/512/71/71753.png" alt="" className={styles.fotosIcono}/>
          <p>What if you could player roller derby...</p>
          </div>
          <div className={styles.divCarrito}>
            <p>$0 ARS</p>
            <img src="https://media.istockphoto.com/id/517056560/es/vector/cesta-icono-vector-ilustraci%C3%B3n.jpg?s=612x612&w=0&k=20&c=hhUqGl79GRcaKDjajX6UT29fvU294_bk9LjnAflDS0A=" alt="" className={styles.carrito}/>
          </div>
        </div>
        <div className={styles.cards}>
          <img src="https://www.freetogame.com/g/474/thumbnail.jpg" alt=""className={styles.fotos} />
          <div className={styles.cardsAcomodo}>
          <h2>Rocket League</h2>
          <img src="https://cdn-icons-png.flaticon.com/512/71/71753.png" alt="" className={styles.fotosIcono}/>
          <p>Get your car-soccer gaming on for free with Psyonix’s Rocket League.</p>
          </div>
          <div className={styles.divCarrito}>
            <p>$2000 ARS</p>
            <img src="https://media.istockphoto.com/id/517056560/es/vector/cesta-icono-vector-ilustraci%C3%B3n.jpg?s=612x612&w=0&k=20&c=hhUqGl79GRcaKDjajX6UT29fvU294_bk9LjnAflDS0A=" alt="" className={styles.carrito}/>
          </div>
        </div>
        <div className={styles.cards}>
          <img className={styles.fotos} src="https://cdn.cloudflare.steamstatic.com/steam/apps/380600/ss_b3f68ef52f78dc08238175afe4f9c7074ab8d3cd.600x338.jpg?t=1673859903" alt="" />
          <div className={styles.cardsAcomodo}>
          <h2>Fishing Planet</h2>
          <img src="https://cdn-icons-png.flaticon.com/512/71/71753.png" alt="" className={styles.fotosIcono}/>
          <p>realistic online first-person multiplayer fishing simulator!</p>
          </div>
          <div className={styles.divCarrito}>
            <p>$1700 ARS</p>
            <img src="https://media.istockphoto.com/id/517056560/es/vector/cesta-icono-vector-ilustraci%C3%B3n.jpg?s=612x612&w=0&k=20&c=hhUqGl79GRcaKDjajX6UT29fvU294_bk9LjnAflDS0A=" alt="" className={styles.carrito}/>
          </div>
        </div>
        <div className={styles.cards}>
          <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1919590/header.jpg?t=1673625785" alt="" className={styles.fotos}/>
          <div className={styles.cardsAcomodo}>
          <h2>NBA 2K23</h2>
          <img src="https://cdn-icons-png.flaticon.com/512/71/71753.png" alt="" className={styles.fotosIcono}/>
          <p>NBA 2K23 is a simulation game of basketball matches</p>
          </div>
          <div className={styles.divCarrito}>
            <p>$6999 ARS</p>
            <img src="https://media.istockphoto.com/id/517056560/es/vector/cesta-icono-vector-ilustraci%C3%B3n.jpg?s=612x612&w=0&k=20&c=hhUqGl79GRcaKDjajX6UT29fvU294_bk9LjnAflDS0A=" alt="" className={styles.carrito}/>
          </div>
        </div>
        <div className={styles.cards}>
          <img src="https://www.freetogame.com/g/499/thumbnail.jpg" alt="" className={styles.fotos}/>
          <div className={styles.cardsAcomodo}>
          <h2>Slapshot: Rebound</h2>
          <img src="https://cdn-icons-png.flaticon.com/512/71/71753.png" alt="" className={styles.fotosIcono}/>
          <p>Do you like hockey?</p>
          </div>
          <div className={styles.divCarrito}>
            <p>$1150 ARS</p>
            <img src="https://media.istockphoto.com/id/517056560/es/vector/cesta-icono-vector-ilustraci%C3%B3n.jpg?s=612x612&w=0&k=20&c=hhUqGl79GRcaKDjajX6UT29fvU294_bk9LjnAflDS0A=" alt="" className={styles.carrito}/>
          </div>
        </div>
        <div className={styles.cards}>
          <img src="https://www.freetogame.com/g/536/thumbnail.jpg" alt="" className={styles.fotos} />
          <div className={styles.cardsAcomodo}>
          <h2>Omega Strikers</h2>
          <img src="https://cdn-icons-png.flaticon.com/512/71/71753.png" alt="" className={styles.fotosIcono}/>
          <p>A 3v3 socccer-style game with knockouts.</p>
          </div>
          <div className={styles.divCarrito}>
            <p>$1000 ARS</p>
            <img src="https://media.istockphoto.com/id/517056560/es/vector/cesta-icono-vector-ilustraci%C3%B3n.jpg?s=612x612&w=0&k=20&c=hhUqGl79GRcaKDjajX6UT29fvU294_bk9LjnAflDS0A=" alt="" className={styles.carrito}/>
          </div>
        </div>
      </section>
      </div>
  )
}
export default GamesCards