import PopularMovieCard from "@/component/card/popular-movie-card"
import LoadMoar from "@/component/load-more-button"
import { useContext, useEffect, useState } from "react"
import { ValueContext } from "../value-context"
import SelectDataValue from "@/component/select-value"


const TrendingPages = ( ) => {
  const value = useContext(ValueContext)
  const [dataMovie,setDataMovie] = useState({
    pageMovie:1,
    pageTv:1,
    movie:[],
    tv:[]
  })
 
  const [selectValue,setSelectValue] = useState('tv')

   
  const getTrending = async () => {
 
 try {
  const today = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=0ccbee0a69447c2b1bd0090bf76b0358&page=${dataMovie.pageTv}`)

  const weeks = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=0ccbee0a69447c2b1bd0090bf76b0358&page=${dataMovie.pageMovie}`)

  const result = await today.json()
  const resultWeek = await weeks.json()

setDataMovie(prevTrendngs => ({
  ...prevTrendngs ,
 tv:dataMovie.pageTv === 1 ? result?.results : [...prevTrendngs.tv, ...result?.results],
 movie:dataMovie.pageMovie === 1 ? resultWeek?.results : [...prevTrendngs.movie, ...resultWeek?.results],
}))
value?.setIsLoading(false)
} catch (error) {
  console.log("Error fetching anime series:", error);
  return [];
}

 }

  useEffect(() => {
    getTrending()
  },[dataMovie.pageTv,dataMovie.pageMovie])

 
    return(
   <div className="is-flex flex-column gap-4" id="movie-list">
    <ul className="is-flex justify-between align-center">
      <li> <h3 className="is-title is-size-3 is-bold text-center">Trending Movies</h3></li>
       <li>
       <SelectDataValue selectValue={selectValue} setSelectValue={setSelectValue} />
       </li>
    </ul>
    {/* MOVIE LIST COLUMNS */}
     <article className="columns is-multiline news is-flex-mobile" >
        {
        selectValue === 'tv' ? dataMovie.tv?.map(movie => {
            return <PopularMovieCard movie={movie}  />
        }) 
        : dataMovie.movie?.map(movie => {
          return <PopularMovieCard movie={movie}  />
      }) 
       }  
 
 <LoadMoar dataMovie={dataMovie} selectValue={selectValue} setDataMovie={setDataMovie} />

        </article>
    {/* END MOVIE LIST */}
</div>
    )
}

export default TrendingPages


 