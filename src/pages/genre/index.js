
import Link from "next/link"
import { useEffect, useState } from "react"


const TrendingPages = ( ) => {
  const [data,setData] = useState({
    genreTv:[],
    genreMovie:[],
    pageTv:1,
    pageMovie:1
  })
 
  const getGenres = async () => {
 
    try {
      const movieGenre = await fetch(" https://api.themoviedb.org/3/genre/movie/list?api_key=0ccbee0a69447c2b1bd0090bf76b0358&language=en-US")

      const tvGenre = await fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=0ccbee0a69447c2b1bd0090bf76b0358")
      
  
      const resultMovie = await movieGenre.json()
      const resultTv = await tvGenre.json()
  console.log(resultTv);
      setData(prevData => ({
        ...prevData ,
        genreTv:data.pageTv === 1 ? resultTv?.genres : [...prevData.genreTv, ...resultTv?.genres],
        genreMovie:data.pageMovie === 1 ? resultMovie?.genres : [...prevData.genreMovie, ...resultMovie?.genres],
  
      }))
      
    } catch (error) {
      console.log("Error fetching anime series:", error);
      return [];
    }
    
 }

  useEffect(() => {
    getGenres()
  },[])
 
    return(
        <div className="is-flex flex-column gap-4" id="movie-list">
  <h3 className="is-title is-size-3 is-bold ">Genre</h3> 
    {/* MOVIE LIST COLUMNS */}
        <article className="is-flex flex-column gap-2">
          <h4 className="is-title">Tv Genre</h4>
        <ul className="is-flex align-center gap-1 flex-wrap">
           {
          data.genreTv?.map(genre => {
            return(
             <li>
               <Link href={`/genre/${genre.id}`} class="tag bg-green is-rounded">{genre.name}</Link>
             </li>
            )
          })
         }
           </ul>

           <h4 className="is-title">Movie Genre</h4>
        <ul className="is-flex align-center gap-1 flex-wrap">
           {
          data.genreMovie?.map(genre => {
            return(
             <li>
               <Link href={`/genre/${genre.id}`} class="tag bg-green is-rounded">{genre.name}</Link>
             </li>
            )
          })
         }
           </ul>
        </article>
    {/* END MOVIE LIST */}
      </div>
    )
}

export default TrendingPages


 