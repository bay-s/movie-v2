import { useEffect, useState } from "react"
import PopularMovieCard from "./card/popular-movie-card"
import PopularTvCard from "./card/popular-tv-card"


const MoviePopularList = ({data,selectValue,handlerSelectValue}) => {
 const [index,setIndex] = useState(0)
  
const movieStream = data?.stream?.mvStream?.results
const tvStream = data?.stream?.tvStream?.results
const theatre = data?.theatre?.results
const tvSeries = data?.tvSeries?.results
 
 
 
 
return(
  <div className="is-flex flex-column gap-3" id="movie-list">

<ul className="is-flex justify-between align-center gap-3">
    <li><h3 className="is-title is-size-3 is-bold">Popular</h3></li>
<li>
<div class="select is-link">
  <select className="no-bg" onChange={handlerSelectValue}>
    <option value='stream'>Streaming</option>
    <option value='theatre'>In Theaters</option>
    <option value='tv'>On Tv</option>
  </select>
</div>
    </li>
</ul>

{/* MOVIE LIST COLUMNS */}
<article className="columns is-multiline is-clipped news is-flex-mobile" id="cast-container">
{
selectValue === 'stream' && (
  movieStream?.map((movie, index) => (
    <PopularMovieCard movie={movie} index={index} key={`movie-${index}`} />
  ))
  
)
}

{
selectValue === 'theatre' && (
  theatre?.map((movie, index) => (
    <PopularMovieCard movie={movie} index={index} key={`movie-${index}`} />
  ))   
)
}

{
 selectValue === 'tv' && (
  tvSeries?.map((tv, index) => (
    <PopularTvCard tv={tv} index={index} key={`tv-${index}`} />
  ))
)
}
    </article>
{/* END MOVIE LIST */}
  </div>
)
}

export default MoviePopularList