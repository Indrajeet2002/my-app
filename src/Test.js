import { useEffect } from "react";
import { getMovieDetails } from "./APIFunctions";

const Test = () => {
    useEffect(async () => {
        console.log(await getMovieDetails(12))
    })
    
    return (
        <div>
        </div>
    );
}

export default Test