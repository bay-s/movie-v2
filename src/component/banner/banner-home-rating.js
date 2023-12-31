import WatchSingleTrailerButton from "../watch-single-trailer"

const { default: Image } = require("next/image")


const BannerHomeRating = ({banner}) => {
    const starImg = '/img/star.png'
    
    return(
<ul className="is-flex align-center gap-2">
<li className="is-flex align-center gap-1">
    <figure className="image is-32x32">
    <Image
    loader={() => starImg}
    src={starImg}
    width={400}
    height={250}
    alt="Image description"   
    />
    </figure>
    <span className="is-title is-bold">{banner?.vote_average}</span>
        </li>
    <li>
    <WatchSingleTrailerButton id={banner?.id} type='movie' />
    </li>
</ul>
    )
}

export default BannerHomeRating