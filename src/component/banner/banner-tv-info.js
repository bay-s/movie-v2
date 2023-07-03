import Image from "next/image"
import { formatDuration } from "@/lib/format-duration"
import Link from "next/link"
import { Fragment } from "react"
import WatchSingleTrailerButton from "../watch-single-trailer"
 
 
const BannerTvInfo = ({tv}) => {
    const starImg = '/img/star.png'
 
    return(
<div className="column is-flex flex-column align-star gap-2">
<h1 className="is-size-3 is-title is-bold txt-white">{tv?.name}</h1>

<div className="is-flex align-center gap-1 flex-wrap">
<p className="is-title  txt-xmall is-bold">{tv?.first_air_date
}</p>
<span className="is-bold">-</span>
<ul className="is-flex align-center gap-1">
 <li>
    {
        tv?.genres?.map((genre,index) => {
            return(
<Fragment key={index}>
           <Link href={`/genre/${genre.id}`} className="txt-white txt-xmall">
            {genre?.name}
            {index < tv?.genres?.length - 1 && ", "}
            </Link>
</Fragment>
            )
        })
    }
 </li>
</ul>
<span className="is-bold">-</span>
<p className="is-title txt-small is-bold"> {tv?.episode_run_time
[0]}m per episodes</p>
</div>

<ul className="is-flex flex-column gap-1">
    <li><p className="is-title">Number of episodes : {tv?.number_of_episodes
}</p></li>
    <li><p className="is-title">Number of season : {tv?.number_of_seasons
}</p></li>
</ul>
 
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
<span className="is-title is-size-4 is-bold">{tv?.vote_average}</span>
</li>
</ul>

 
<WatchSingleTrailerButton id={tv?.id} type='tv' />

<span className="icon-container">
<i class="fa fa-star" aria-hidden="true"></i>
</span>

</div>

<h3 className="is-title is-italic is-bold">{tv?.tagline}</h3>

<div className="is-flex flex-column gap-1">
  <h3 className="is-title">Summary</h3>
  <p className="lh-base txt-small">{tv?.overview}</p>
</div>

 </div>
    )
}
export default BannerTvInfo