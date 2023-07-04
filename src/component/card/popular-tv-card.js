import GenreLink from "@/component/genre-link";
import Image from "next/image"
import Link from "next/link";


const PopularTvCard = ({tv}) => {
  const images = `https://image.tmdb.org/t/p/w500/${tv?.poster_path}`
  const rating = parseFloat(tv?.vote_average.toFixed(1));
return(
<div className="column p-2 fade is-one-third-mobile is-4-tablet is-3-desktop " key={tv?.id}> 
<figure class="article ">

<Image
loader={() => images}
src={images}
width={400}
height={250}
alt="Image description"   
/>


<figcaption className="is-flex flex-column">

<div className="is-flex flex-column gap-1 p-3 my-auto"> 
<h3 className="is-title is-bold">
 <Link href={`/tv/${tv?.id}`} className="txt-white">
 {tv?.name}
 </Link>
</h3>
<ul className="is-flex align-center gap-1">
 <li><GenreLink id={tv?.id} type='tv'/></li>
</ul>

<p className="txt-xmall">Release Date: <strong className="txt-white txt-xmall">{tv?.first_air_date}</strong></p>
<p className="star-container">
  <span className="is-title is-bold">{rating}</span>
</p>
</div>

</figcaption>

</figure>
</div>


)
}

export default PopularTvCard

