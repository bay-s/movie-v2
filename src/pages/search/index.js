import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ValueContext } from "../value-context";
import PopularTvCard from "@/component/card/popular-tv-card";
import PopularMovieCard from "@/component/card/popular-movie-card";
import LoadMoar from "@/component/load-more-button";
import SelectDataValue from "@/component/select-value";
 


const SearchPage = ({result}) => {
   const router = useRouter()
   const value = useContext(ValueContext)
   const [selectValue,setSelectValue] = useState('tv')
   const {query} = router.query
   const [data,setData] = useState({
    pageTv:1,
    pageMovie:1,
    movie:[],
    tv:[],
    tv_result:0,
    movie_result:0
   })

   const getMovieTvByTitle = async () => {
    const api_key = process.env.NEXT_PUBLIC_API_KEY
    try {
        const movie = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&page=${data.pageMovie}`)

        const tv = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${query}&page=${data.pageTv}`)
        
        const movieResult = await movie.json()
        const tvResult = await tv.json()
 console.log(tvResult);
 console.log(movieResult);
        setData(prevData => ({
         ...prevData,
         tv: data.pageTv === 1 ? tvResult.results : [...prevData.tv, ...tvResult.results],
         movie: data.pageMovie === 1 ? movieResult.results : [...prevData.movie, ...movieResult.results],
         tv_result:tvResult?.total_results,
         movie_result:movieResult?.total_results
       }));
       value?.setIsLoading(false)
      } catch (error) {
        console.log("Error not found:", error);
        return [];
      }
}

   useEffect(() => {
    getMovieTvByTitle()
   },[query,data.pageTv,data.pageMovie])

   console.log(data);
   const total = data?.movie_result + data.tv_result
    return(
        <section className="is-flex flex-column gap-4" id="movie-list">

<div className="is-flex justify-between align-center">
    <h3 className="is-title is-size-4">Search result for: <strong className="is-bold txt-white px-2">{query}</strong></h3>
    
    <ul className="is-flex align-center gap-1">
        <li><h3 className="is-title is-size-4">Total Result : {total.toLocaleString()}</h3></li>
        <li><SelectDataValue  setSelectValue={setSelectValue} type=''/></li>
    </ul>
</div>
<article className="columns is-multiline news is-flex-mobile">
 
 
        {
        selectValue === 'tv' ? data.tv?.map(movie => {
            return <PopularTvCard tv={movie}  />
        }) 
        : data?.movie?.map(movie => {
          return <PopularMovieCard movie={movie}  />
      }) 
       }  
 
{
    data.tv_result < 20 || data.movie_result < 20 ? "" 
    : <LoadMoar dataMovie={data} selectValue={selectValue} setDataMovie={setData} />
}
 </article>

        </section>
    )
}

export default SearchPage

 