import { useEffect, useState } from "react"
import PopularMovieCard from "./popular-movie-card";

const RecomendMovieCard = ({movieId}) => {
   const [movieRecomend,setMovieRecomend] = useState([])

   const getMovieRecomend = async () => {
    console.log(movieId);
        const movies = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=0ccbee0a69447c2b1bd0090bf76b0358`)
        
        const result = await movies.json() 
        setMovieRecomend(result?.results)
   }
   useEffect(() => {
     getMovieRecomend()
   },[])
 
    return(
<section className="is-flex flex-column gap-2">

     <h3 className="is-title is-size-3 is-bold">Recomendation</h3>
    <div className="columns is-clipped news is-flex-mobile" id="cast-container">
      {
        movieRecomend?.map(movie => {
            return <PopularMovieCard  movie={movie} />
        })
      }
    </div>

</section>
    )
}

export default RecomendMovieCard