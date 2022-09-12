import style from '../css/Menu.module.css'
import {Seacher} from './Searcher.jsx'
import {Link} from "react-router-dom";
export function Menu(){

    return(
            <div className={style.Container}>
                 <p filter-content="B" className={style.Title}><Link to="/">Busca7Arte</Link></p>
                <Seacher className={style.Searcher}></Seacher>
            </div>
    );

}