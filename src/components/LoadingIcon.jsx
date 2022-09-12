import {AiOutlineLoading3Quarters} from "react-icons/ai";
import style from "../css/LoadingIcon.module.css"

export function LoadingIcon(){

    return(
       <div className={style.IconLoadingContainer}><AiOutlineLoading3Quarters className={style.LoadingIcon}/></div> 
    );

}