import GenreLink from "@/component/genre-link";
import Image from "next/image"
import Link from "next/link";


const PopularMovieCard = ({movie}) => {
  const images = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`
  const rating = parseFloat(movie?.vote_average?.toFixed(1));
  const noImg = '/img/no-image.png'
  console.log(!movie?.poster_path);
return(
<div className="column p-2 fade is-one-third-mobile is-4-tablet is-3-desktop " key={movie?.id}> 
<figure class="article ">

<Image
loader={() => !movie?.poster_path ? noImg : images}
src={!movie?.poster_path ? noImg : images}
width={400}
height={250}
alt="Image description"   
/>

<figcaption className="is-flex flex-column">

<div className="is-flex flex-column gap-1 p-3 my-auto"> 
<h3 className="is-title is-bold">
<Link href={`/movie/${movie?.id}`} className="txt-white">
 {movie?.title}
 </Link>
</h3>
<ul className="is-flex align-center gap-1">
 <li><GenreLink id={movie?.id} type='movie' /></li>
</ul>

<p className="txt-xmall dates">Release Date: <strong className="txt-white txt-xmall">{movie?.release_date}</strong></p>
<p className="star-container">
  <span className="is-title is-bold">{rating}</span>
</p>
</div>

</figcaption>

</figure>
</div>


)
}

export default PopularMovieCard


 