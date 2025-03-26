import React, { useEffect, useState } from 'react'

let genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
};

const WatchListPage = ({watchList})=>{
    const [list,setList] = useState([])

    const handleMovieSearch = (e)=>{
        const newList = Object.values(watchList).filter(movie => movie.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setList(newList);
    }

    const handleSorting = (type)=>{
        const newList = Object.values(watchList).sort((a,b)=> type === 'DESC' ? a.popularity - b.popularity : b.popularity - a.popularity);
        setList(newList);
    }

    const selectedGenre = ()=>{
        let genreList = []
        Object.values(watchList).forEach(movie =>{
            genreList = genreList.concat(movie.genre_ids)
        });
        return [... new Set(genreList)];
    }

    const handleGenre = (generID)=>{
        const newList = Object.values(watchList).filter(movie => generID ? movie.genre_ids.includes(generID) : true)
        setList(newList);
    }

    useEffect(()=>{
        setList(Object.values(watchList))
    },[watchList])
    return(
        <div>
            <h1>Watch List Page</h1>
            <div className='container'>
                <div className='left-section'>
                    <div className='genre-list'>
                        <div className='genre' onClick={()=>handleGenre('')}>All</div>
                        {selectedGenre().map(generID =>(
                            <div className='genre' onClick={()=>handleGenre(generID)}>{genreids[generID]}</div>
                        ))}
                    </div>
                </div>
                <div className='right-section'>
                    <input type='text' placeholder='search' onChange={handleMovieSearch} />
                    <table border={1}>
                        <tr>
                            <td>ID</td>
                            <td>Poster</td>
                            <td>Movie</td>
                            <td>Genere</td>
                            <td>Popularity <span onClick={()=>handleSorting('DESC')}>^</span><span onClick={()=>handleSorting('ASC')}>v</span></td>
                        </tr>
                        {
                            Object.values(list).map(movie=>(
                                <tr>
                                    <td>{movie.id}</td>
                                    <td><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt= {movie.title} height='50px'></img></td>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre_ids.map(generIDs => genreids[generIDs]).join(', ')}</td>
                                    <td>{movie.popularity}</td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
            </div>
            
        </div>
    )
}

export default WatchListPage