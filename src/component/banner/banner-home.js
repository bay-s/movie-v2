import { useEffect, useState } from "react"
import BannerHomeCarousel from "./banner-home-carousel";
import BannerHomeRating from "./banner-home-rating";
 

const BannerHome = () => {
    const [banner,setBanner] = useState([])
    const [index, setIndex] = useState(0);
    const [movieIndex,setMovieIndex] = useState(0)
 
    const getPopularMovie = async () => {
     const popularMovies = await  fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=0ccbee0a69447c2b1bd0090bf76b0358"
          )
         const respon = await popularMovies.json()  
         setBanner(respon?.results)
    }
    useEffect(() => {
        getPopularMovie() 
    },[])

 
 
   const bannerStyle = {
    position: 'relative',
    backgroundImage: 
    `linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280/${banner[movieIndex]?.backdrop_path})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    padding: '20px',
  };
 
  const values = {
    setIndex,
    index,
    setMovieIndex,
    movieIndex,
    banner
  }
    return (
<article className="is-flex flex-column fade" id="banner" style={bannerStyle}>

<div className="my-auto is-flex flex-column align-start ">
  <h1 className="title is-3 is-title is-bold txt-white">{banner[movieIndex]?.original_title}</h1>

 <BannerHomeRating banner={banner[movieIndex]} />
 <BannerHomeCarousel banner={banner[movieIndex]} values={values} />

 </div>

</article>

    )
}

export default BannerHome



