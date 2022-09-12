import style from "../css/Card.module.css"
import {Link} from "react-router-dom";

export  function Card({film}) {


  const urlImage=film.poster_path ?"https://image.tmdb.org/t/p/w300" + film.poster_path : "https://via.placeholder.com/300x450.png/ffffff/000000?text="+film.title ;
  
 
  return (
    <div className={style.Card}>
      <Link to={"/film/"+film.id}>
        <img className={style.Image} src={urlImage} alt={film.title}/>
        <p className={style.Title}>{film.title}</p>
      </Link>
    </div>
  )
}
