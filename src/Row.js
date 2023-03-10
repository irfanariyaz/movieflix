import React, { useEffect, useState } from 'react'
import "./row.css"
import axios from "./axios"
function Row({title,fetchurl,islargeRow=false}) {
    const [movies,setMovies] = useState([])
    const base_url ="https://www.themoviedb.org/t/p/original"

    useEffect(()=>{
        async function fetchData(){
        const request = await axios.get(fetchurl)
        setMovies(request.data.results)
        return request
    }
        fetchData()
    },[fetchurl])
  return (
    <div  className='row'>
        <h2>{title}</h2>
        <div className="row_posters">
            {movies.map((movie) =>(
            (islargeRow && movie.poster_path) ||
                (!islargeRow && movie.backdrop_path)) && (<img  className={`row__poster ${islargeRow && 'row_posterLarge'}`} src={`${base_url}${islargeRow ? movie.poster_path:movie.backdrop_path}`} alt={movie.name} />)  )
                
            }

        </div>

    </div>
  )
}

export default Row