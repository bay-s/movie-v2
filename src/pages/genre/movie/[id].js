import PopularMovieCard from "@/component/card/popular-movie-card";
import LoadMoar from "@/component/load-more-button";
import SelectGenrePages from "@/component/select-genre-page";
import { ValueContext } from "@/pages/value-context";
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react";

const  GenreMoviePage = ( ) => {
    const value = useContext(ValueContext)
     const route = useRouter()
     const pageName = route.query.id.split("-")[1]
     const genreId =  route.query.id.split("-")[0]
     const [dataMovie,setDataMovie] = useState({
        pageMovie:1,
        movie:[],
        total_results:0
      })
    
      
      const getMovieByGenre = async () => {
        const api_key = process.env.NEXT_PUBLIC_API_KEY
    
       try {
         const responseMovie =  await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${genreId}&page=${dataMovie.pageMovie}`)
         const dataMovies = await responseMovie.json()
  
         setDataMovie(prevDataMovie => ({
          ...prevDataMovie,
          movie: dataMovie.pageMovie === 1 ? dataMovies.results : [...prevDataMovie.movie, ...dataMovies.results],
          total_results:dataMovies.total_results
        }));
        value?.setIsLoading(false)
       } catch (error) {
         console.log("Error fetching anime series:", error);
         return [];
       }
    }
  
    useEffect(() => {
      getMovieByGenre()
    },[dataMovie.pageMovie, genreId])
  
    return(
<section className="is-flex flex-column gap-3 p-2">

    <div className="is-flex justify-between align-center">
        <h3 className="is-title is-bold txt-white is-size-4">{pageName }</h3>
        <h3 className="is-title is-bold txt-white is-size-4">{dataMovie?.total_results.toLocaleString()} shows</h3>
    </div>

<SelectGenrePages pages={route.query.id.split("-")} />
       <article className="columns is-multiline news is-flex-mobile">
        {
            dataMovie.movie?.map(movie => {
                return <PopularMovieCard movie={movie} />
            })
        }
       </article>
       <LoadMoar dataMovie={dataMovie} selectValue={null} setDataMovie={setDataMovie} />

</section>
    )
}

export default GenreMoviePage
 