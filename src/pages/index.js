import BannerHome from "@/component/banner/banner-home"
import MoviePopularList from "../component/movie-popular-list"
import MoviePopularTrailer from "@/component/movie-popular-trailer"
import { Fragment, useState } from "react"
import MetaHead from "@/lib/meta-head"
 

const HomePage = ({data}) => {
  const [selectValue,setSelectValue] = useState('stream')
  
  const handlerSelectValue = (e) => {
    const value = e.target.value
    setSelectValue(value)
  }
 
    return(
<Fragment>
  <MetaHead title='Movie Info List' desc='Movie and Tv info list' />
  
<div className="is-flex flex-column gap-4">
<BannerHome /> 
<MoviePopularList data={data} selectValue={selectValue} handlerSelectValue={handlerSelectValue}/>
<MoviePopularTrailer  data={data} selectValue={selectValue} handlerSelectValue={handlerSelectValue} />
</div>

</Fragment>
    )
}

export default HomePage

export async function getServerSideProps(context){
    const { id }  = context.query
 
    const getMovieDetail = async () => {
      const api_key = process.env.NEXT_PUBLIC_API_KEY
        try {
            const streamMv = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_providers=8,9&watch_region=US`)
            const streamTv = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_providers=8,9&watch_region=US`)
            const tvSeries =  await fetch( `https://api.themoviedb.org/3/tv/popular?api_key=${api_key} `
            )

            const theatre = await fetch( `https://api.themoviedb.org/3/movie/now_playing?api_key=0ccbee0a69447c2b1bd0090bf76b0358 `
            )

            const dataTheatre = await theatre.json()
            const dataTv = await tvSeries.json()
            const mvStream = await streamMv.json()
            const tvStream = await streamTv.json()
           return {
            tvSeries:dataTv,
            theatre: dataTheatre,
            stream:{
                tvStream,
                mvStream
            }
           }
        } catch (error) {
          console.log("Error fetching anime series:", error);
          return [];
        }
     }
 
 
       const data = await getMovieDetail()
       

     return {
      props: {
         data
       }
    }
  
  }
 
