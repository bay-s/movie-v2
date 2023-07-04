import { getLatestTrailer } from "@/lib/get-trailer"
import TrailerCard from "./card/trailer-card"
import { useEffect, useState } from "react"
import { getLatestTvTrailer } from "@/lib/get-tv-trailer"
 

const MoviePopularTrailer = ({data }) => {
  const [trailer,setTrailer] = useState([])
  const [images,setImages] = useState([])
  const [type,setType] = useState('movie')
  const [selectValue,setSelectValue] = useState('stream')
  
  const handlerSelectValue = (e) => {
    const value = e.target.value
    setSelectValue(value)
  }
 
  
  const getTrailer = async () => {

 const trailers = []
 const image = []
console.log(selectValue);
if(selectValue === 'stream'){
  getMovieStreamTrailer(trailers,image)
}else if(selectValue === 'theatre'){
  getMovieCinemaTrailer(trailers,image)
}else if(selectValue === 'tv'){
  getTvTrailer(trailers,image)
}

  }


  useEffect(() => {
   getTrailer()
  },[selectValue])

  const getMovieStreamTrailer = async (trailers,image) => {

    const movie = await Promise.all(
      data.stream.mvStream.results.map(async (item) => {
        const videoUrl = await getLatestTrailer(item.id);
        trailers.push(videoUrl?.streamingUrl)
        image.push(videoUrl.images)
      })
    );

    setTrailer(trailers)
    setImages(image)
    
  }

  
  const getMovieCinemaTrailer = async (trailers,image) => {

    const movie = await Promise.all(
      data?.theatre?.results.map(async (item) => {
        const videoUrl = await getLatestTrailer(item.id);
        trailers.push(videoUrl?.streamingUrl)
        image.push(videoUrl.images)
        
      })
    );

    setTrailer(trailers)
    setImages(image)
    
  }

  const getTvTrailer = async (trailers,image) => {

    const movie = await Promise.all(
      data?.stream?.tvStream?.results.map(async (item) => {
        const videoUrl = await getLatestTvTrailer(item.id);
        trailers.push(videoUrl?.streamingUrl)
        image.push(videoUrl?.images) 
      })
    );

    setTrailer(trailers)
    setImages(image)
    setType('tv')
  }

  console.log(type);
    return(
        <div className="is-flex flex-column gap-3" id="movie-list">
   
   
<div className="is-flex justify-between align-center gap-3">
<h3 className="is-title is-size-3 is-bold txt-white">Trailers</h3>
<div class="select is-primary select-menu">
  <select className="no-bg" onChange={handlerSelectValue}>
    <option value='stream'>Streaming</option>
    <option value='theatre'>In Theaters</option>
    <option value='tv'>On Tv</option>
  </select>
</div>
</div>
 
<article className="columns is-multiline news is-flex-mobile news" id="cast-container">
  <TrailerCard  images={images} trailer={trailer}  type={type} />
</article>
        </div>
    )
}

export default MoviePopularTrailer