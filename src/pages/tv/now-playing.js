import PopularTvCard from "@/component/card/popular-tv-card";
import { useContext, useEffect, useState } from "react"
import { ValueContext } from "../value-context";
import LoadMore from "@/component/load-moar-button";

 
 
const TvNowPlayingPage = ( ) => {
    const value = useContext(ValueContext)
    const [series,setSeries] = useState([])
    const [page,setPage] = useState(1)
    
   
  const fetchPopularTVSeries = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/tv/airing_today?language=en-US&api_key=0ccbee0a69447c2b1bd0090bf76b0358&page=${page}`);
      const data = await response.json();
      const popularTVSeries = data.results;
 
      value?.setIsLoading(false)
      setSeries(page === 1 ? popularTVSeries : [...series, ...popularTVSeries]);
    } catch (error) {
      console.log('Error fetching popular TV series:', error);
    }

  };
  
 
  useEffect(() => {
    fetchPopularTVSeries()
  },[page])
  console.log(value);
    return(
     <section className="is-flex flex-column gap-4">
       <h3 className="is-title">Now Playing Tv Series</h3>
       <article className="columns is-multiline news is-flex-mobile">
        {
            series?.map(tv => {
                return <PopularTvCard tv={tv} />
            })
        }
       </article>
       <LoadMore  setPage={setPage} page={page}/>
     </section>
    )
}

export default TvNowPlayingPage
 