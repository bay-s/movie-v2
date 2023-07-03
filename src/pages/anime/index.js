import PopularMovieCard from "@/component/card/popular-movie-card"
import PopularTvCard from "@/component/card/popular-tv-card"
import LoadMoar from "@/component/load-more-button"
import { useContext, useEffect, useState } from "react"
import { ValueContext } from "../value-context"
import SelectDataValue from "@/component/select-value"


const AnimePages = () => {
  const value = useContext(ValueContext)
  const [dataMovie,setDataMovie] = useState({
    pageMovie:1,
    pageTv:1,
    movie:[],
    tv:[]
  })
  const [selectValue,setSelectValue] = useState('tv')

    const getAnime = async () => {

     const url = `https://api.themoviedb.org/3/discover/tv?api_key=0ccbee0a69447c2b1bd0090bf76b0358&language=en-US&sort_by=popularity.desc&page=${dataMovie.pageTv}&with_keywords=210024|222243https://api.themoviedb.org/3/discover/tv?api_key=0ccbee0a69447c2b1bd0090bf76b0358&with_genres=16`;

     const urlMovie = `https://api.themoviedb.org/3/discover/movie?api_key=0ccbee0a69447c2b1bd0090bf76b0358&language=en-US&sort_by=popularity.desc&page=${dataMovie.pageMovie}&with_keywords=210024|222243`;

     try {
       const response = await fetch(url);
       const responseMovie = await fetch(urlMovie)
       const data = await response.json();
       const dataMovies = await responseMovie.json()

       setDataMovie(prevDataMovie => ({
        ...prevDataMovie,
        tv: dataMovie.pageTv === 1 ? data.results : [...prevDataMovie.tv, ...data.results],
        movie: dataMovie.pageMovie === 1 ? dataMovies.results : [...prevDataMovie.movie, ...dataMovies.results],
      }));
      value?.setIsLoading(false)
     } catch (error) {
       console.log("Error fetching anime series:", error);
       return [];
     }
  }

  useEffect(() => {
    getAnime()
  },[dataMovie.pageTv,dataMovie.pageMovie])

 
    return(
        <div className="is-flex flex-column gap-4" id="movie-list">
    <ul className="is-flex justify-between align-center">
      <li> <h3 className="is-title is-size-3 is-bold text-center">Anime</h3></li>
       <li>
  <SelectDataValue  setSelectValue={setSelectValue} />
       </li>
    </ul>
    {/* MOVIE LIST COLUMNS */}
     <article className="columns is-multiline news is-flex-mobile">
 
        {
        selectValue === 'tv' ? dataMovie.tv?.map(movie => {
            return <PopularTvCard tv={movie}  />
        }) 
        : dataMovie?.movie?.map(movie => {
          return <PopularMovieCard movie={movie}  />
      }) 
       }  
 
      <LoadMoar dataMovie={dataMovie} selectValue={selectValue} setDataMovie={setDataMovie} />
        </article>
    {/* END MOVIE LIST */}
      </div>
    )
}

export default AnimePages

