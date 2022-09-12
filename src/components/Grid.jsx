import { useEffect, useState } from "react"
import { getContent } from "../Service/getContent"
import style from "../css/Grid.module.css"
import { Card } from "./Card";
import { LoadingIcon } from "../components/LoadingIcon"
import { URLContentSelector } from "../Service/URLContentSelector"
import InfiniteScroll from 'react-infinite-scroll-component';


export function Grid({ search }) {

  const [films,setFilms] = useState([]);
  
  const [isLoading,setIsLoading]=useState(false);

  const [page,setPage] = useState(1);

  const[hasMore, setHasMore]= useState(true);



  useEffect(()=>{
    setIsLoading(true);
      getContent(URLContentSelector(search,page)).then((res) => {
      let data = res.data;
      setFilms((prev) => prev.concat(data.results))
      setHasMore(data.page < data.total_pages)
      setIsLoading(false);
   
      
      });

  },[search,page]);
  
         
 

  return(
  <InfiniteScroll
  dataLength={films.length}
  next={()=>setPage((prev)=>prev+1)}
  hasMore={hasMore}
  loader={<LoadingIcon/>}>
            <div className={style.Grid}>
              {films.map
                ((film,key)=>
                  {
                    return <Card key={key} film={film}/>
                  }
                )
              }
            </div>      
  </InfiniteScroll>
  )
      
}



