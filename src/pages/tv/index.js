import { Fragment, useContext, useEffect, useState } from "react"
import { ValueContext } from "../value-context";
import PopularTvCard from "@/component/card/popular-tv-card";
import LoadMore from "@/component/load-moar-button";
import MetaHead from "@/lib/meta-head";

 
 
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
<Fragment>
<MetaHead title='Tv' desc="Tv pages" />

<section className="is-flex flex-column gap-4">
  <h3 className="is-title">Popular Tv Series</h3>
  <article className="columns is-multiline news is-flex-mobile">
   {
       series?.map(tv => {
           return <PopularTvCard tv={tv} />
       })
   }
  </article>
  <LoadMore  setPage={setPage} page={page}/>
</section>
</Fragment>
    )
}

export default PopularTvPage
 