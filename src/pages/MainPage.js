import {Grid} from '../components/Grid';
import { useQuery } from "../hooks/useQuery"
export function MainPage(){

    const search = useQuery().get("search");
    return(     
        <div>
            <Grid key={search} search={search}/>
        </div>  
    );
}