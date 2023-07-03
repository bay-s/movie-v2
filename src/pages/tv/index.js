import { useContext, useEffect, useState } from "react"
import { ValueContext } from "../value-context";
import LoadMoar from "@/component/load-more-button";
import PopularTvCard from "@/component/card/popular-tv-card";

 
 
const PopularTvPage = ( ) => {
  const value = useContext(ValueContext)
  const [series,setSeries] = useState([])
  const [page,setPage] = useState(1)
  
   
  const fetchPopularTVSeries = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US&api_key=0ccbee0a69447c2b1bd0090bf76b0358&page=${page}`);
      const data = await response.json();
      const popularTVSeries = data.results;
      setSeries(page === 1 ? popularTVSeries : [...series, ...popularTVSeries]);
      value?.setIsLoading(false)
    } catch (error) {
      console.log('Error fetching popular TV series:', error);
    }

  };
  
 
  useEffect(() => {
    fetchPopularTVSeries()
  },[page])
    return(
     <section className="is-flex flex-column gap-4">
       <h3 className="is-title">Popular Tv Series</h3>
       <article className="columns is-multiline news is-flex-mobile">
        {
            series?.map(tv => {
                return <PopularTvCard tv={tv} />
            })
        }
       </article>
       <LoadMoar  setPage={setPage} page={page}/>
     </section>
    )
}

export default PopularTvPage
 