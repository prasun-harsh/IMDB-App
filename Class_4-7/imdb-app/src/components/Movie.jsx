import React, { useContext } from "react"
import { WatchListContext } from "../assets/context/watchListContext";

const  Movie  = ({movie})=>{

    const WatchListContextData = useContext(WatchListContext)
    const {watchList,setWatchList} = WatchListContextData;

    const handleWatchListBtnCLick = () => {
        if (watchList[movie.id]) {
            // Remove from watchlist
            const updatedWatchList = { ...watchList };
            delete updatedWatchList[movie.id];
            setWatchList(updatedWatchList);
        } else {
            // Add to watchlist
            setWatchList({ ...watchList, [movie.id]: movie });
        }
    };

    return(
        <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt= {movie.title}></img>
            <div className="movie-name">
                <h3>{movie.title}</h3>
                <button onClick={handleWatchListBtnCLick}>{watchList[movie.id] ? '-' : '+'}WatchList</button>
            </div>
        </div>
    )
}

export default Movie;