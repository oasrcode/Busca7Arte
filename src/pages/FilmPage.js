import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getContent } from "../Service/getContent";
import { LoadingIcon } from "../components/LoadingIcon"
import style from "../css/FilmPage.module.css"

export function FilmPage() {

    let {id} = useParams();
    
    const [film,setFilm] = useState([]);

    const urlFilm = "/movie/"+id

    const urlImage=film.backdrop_path ?"https://image.tmdb.org/t/p/original" + film.backdrop_path : "https://via.placeholder.com/300x450.png/ffffff/000000?text="+film.title ;
 
    const [isLoading,setIsLoading]=useState(false);
    
    useEffect(()=>{
        setIsLoading(true);
        getContent(urlFilm).then((res)=>
        {
            let data = res.data;
            setFilm(data);
             setIsLoading(false);
        });
    },[]);


    if(isLoading===true){
        return(
            <LoadingIcon className={style.LoadingIcon}/>
        )
    }else{

        return (
    
            <div className={style.InfoFilmContainer}>
                <img  className={style.Column} src={urlImage} alt={style.title}/>
                <div className={style.Column}>
                    <h2>Título: {film.title}</h2>
                    <p><strong>Estreno:</strong> {film.release_date}</p>
                    <p><strong>Duración:</strong> {film.runtime} min</p>
                    {<p><strong>Géneros: </strong>{film.genres && film.genres.map((g,i)=> g.name+" ")}</p>} 
                    <p><strong>Descripción:</strong> {film.overview}</p>
                </div>
            </div>
      
        )

    }
  
}

