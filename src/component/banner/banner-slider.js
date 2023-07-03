import Image from "next/image"
import SliderLeft from "./slider-left"
import SliderRight from "./slider-right"


const BannerHomeSlider = ({value}) => {
 
    const slideRight = (e) => {
        e.preventDefault()
        value.setIndex(prevIndex => prevIndex + 1);
 
    }

    const slideLeft = (e) => {
        e.preventDefault()
        value.setIndex(prevIndex => prevIndex - 1);
    }

    const getIndexMovie = (e) => {
        e.preventDefault()
        const indexs = parseInt(e.currentTarget.dataset.index)
        value.setMovieIndex(indexs)
 
    }
    const styles = {
        transform:`translateX(-${value.index * 100}%)`,
    }
    return(
<div className="column is-6 is-relative "  >
 <SliderLeft slideLeft={slideLeft} index={value.index}  />
 <SliderRight slideRight={slideRight} index={value.index} length={value.banner?.length} />
    <div className="columns is-clipped  is-flex-mobile"  >
 
        {
          value.banner?.map((item,indexs) => {
            const img = `https://image.tmdb.org/t/p/w1280/${item?.poster_path}`
            return(
<figure className="image is-128x128 is-clickable p-2 column is-one-third-mobile is-4-tablet is-3-desktop " data-index={indexs}  id="carousel"  style={styles} key={item.id} onClick={getIndexMovie}>
    <Image
    loader={() => img}
    src={img}
    width={400}
    height={250}
    alt="Image description"   
    data-index={indexs} 
    />
    </figure>
            )
          })
        }
        </div>
</div>
    )
}

export default  BannerHomeSlider