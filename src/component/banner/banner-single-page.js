
import Image from "next/image";
import BannerTvInfo from "./banner-tv-info";
import BannerMovieInfo from "./banner-movie-info";
 

const BannerSinglePage = ({movie,pageName}) => {
 
   const bannerStyle = {
    position: 'relative',
    position: 'relative',
    backgroundImage: 
    `linear-gradient(to right, rgba(52.5, 52.5, 73.5, 1) calc((50vw - 170px) - 340px), rgba(52.5, 52.5, 73.5, 0.84) 50%, rgba(52.5, 52.5, 73.5, 0.84) 100%), url(https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    padding: '20px',
  };

  const poster = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`

return (
<article className="is-flex flex-column fade" id="banner-single" style={bannerStyle}>

<div className="columns is-multiline gap-2 my-auto ">
 <div className="column is-4">
 <figure className="banner-single-poster">
<Image
loader={() => poster}
src={poster }
width={500}
height={500}
alt="Image description"   
/>
</figure>
 </div>

{
  pageName === 'tv' ? <BannerTvInfo tv={movie} />
  : <BannerMovieInfo movie={movie} />
}
 
 </div>

 
</article>

    )
}

export default BannerSinglePage


// backgroundImage: 
// `linear-gradient(to right, rgba(31.5, 31.5, 73.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 73.5, 0.84) 50%, rgba(31.5, 31.5, 73.5, 0.84) 100%) , url(https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path})`,