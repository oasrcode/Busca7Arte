import style from '../css/Searcher.module.css'
import {useState } from "react"
import { useNavigate } from 'react-router-dom';
import {IoSearchCircleSharp} from "react-icons/io5";


export function Seacher() {

  const [search,setSearch] = useState("");
  const navigate = useNavigate();
         
  const handleSubmit= (e) => {
    e.preventDefault();
    navigate("/?search="+search);
  }

  const  handleOnChange=(e)=>{
    setSearch(e.target.value);
  }
  
  return (
    <div>
     <form className={style.Form} onSubmit={handleSubmit}>
      <input className={style.Text} type="text" value={search ?? ""}onChange={handleOnChange}/>
      {/* <input type="submit" className={style.Button} value={IoSearchCircleSharp}/> */}
      <IoSearchCircleSharp size={2}></IoSearchCircleSharp>
    </form>
  </div>
  )
}

