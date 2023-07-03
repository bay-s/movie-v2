import BannerHomeSlider from "./banner-slider"

const BannerHomeCarousel = ({banner,values}) => {

    return(
<div className="columns is-multiline align-center mt-5 ">
<div className="column is-full is-6-tablet is-6-desktop">
<h3 className="is-title mb-2">Summary</h3>
       <p className="lh-base txt-small text-wrap text-ellips" style={{ height: '100px' }}>
        {banner?.overview}
      </p>
      
          </div>
 <BannerHomeSlider value={values} />
</div>
    )
}

export default BannerHomeCarousel