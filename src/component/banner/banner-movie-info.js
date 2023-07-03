import { formatDuration } from "@/lib/format-duration"
import GenreLink from "../genre-link"
import Image from "next/image"
import WatchSingleTrailerButton from "../watch-single-trailer"
import { useEffect, useState } from "react"
import { getSingleMovieTrailer } from "@/lib/get-single-movie-trailer"


const BannerMovieInfo = ({movie}) => {
    const starImg = '/img/star.png'
    const [isHasTrailer,setIsHasTrailer] = useState(true)

    const getTrailer = async () => {
      const movieTrailer = await getSingleMovieTrailer(movie?.id)
  
      if(movieTrailer?.error){
        setIsHasTrailer(false)
      }
    }
    useEffect(() => {
      getTrailer()
    },[])
    return(
        <div className="column is-flex flex-column align-star gap-2">
<h1 className="is-size-3 is-title is-bold txt-white">{movie?.title}</h1>

<div className="is-flex align-center gap-1 flex-wrap">
<p className="is-title  txt-xmall is-bold">{movie?.release_date
}</p>
<span className="is-bold">-</span>
<ul className="is-flex align-center gap-1">
 <li><GenreLink id={movie?.id} type='movie' /></li>
</ul>
<span className="is-bold">-</span>
<p className="is-title txt-small is-bold"> {formatDuration(movie?.runtime)}</p>
</div>
 
<div className="is-flex align-center gap-2">

<ul className="is-flex align-center gap-2">
  <li className="is-flex align-center gap-1">
<figure className="image is-32x32">
<Image
src={starImg}
width={400}
height={250}
alt="Image description"   
/>
</figure>
<span className="is-title is-size-4 is-bold">{movie?.vote_average}</span>
</li>
</ul>

<WatchSingleTrailerButton id={movie?.id} type='movie' />

<span className="icon-container">
<i class="fa fa-star" aria-hidden="true"></i>
</span>

</div>

<h3 className="is-title is-italic is-bold">{movie?.tagline}</h3>

<div className="is-flex flex-column gap-1">
  <h3 className="is-title">Summary</h3>
  <p className="lh-base txt-small">{movie?.overview}</p>
</div>

 </div>

    )
}

export default BannerMovieInfo