import { useEffect, useState } from "react"
import PopularTvCard from "./popular-tv-card"

const RecomendTvCard = ({tvId}) => {
    const [tvRecomend,setTvRecomend] = useState([])

    const getTvRecomend = async () => {
 
         const movies = await fetch(`https://api.themoviedb.org/3/tv/${tvId}/recommendations?api_key=0ccbee0a69447c2b1bd0090bf76b0358`)
         
         const result = await movies.json() 
         setTvRecomend(result?.results)
    }
    useEffect(() => {
      getTvRecomend()
    },[])
    
    return(
<section className="is-flex flex-column gap-2">

<h3 className="is-title is-size-3 is-bold">Recomendation</h3>
<div className="columns is-clipped news is-flex-mobile" id="cast-container">
 {
   tvRecomend?.map(movie => {
       return <PopularTvCard  tv={movie} />
   })
 }
</div>

</section>
    )
}

export default RecomendTvCard