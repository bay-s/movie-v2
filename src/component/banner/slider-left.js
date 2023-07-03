const { default: Image } = require("next/image")


const SliderLeft = ({slideLeft,index}) => {
    const left = '/img/left.png'

 
    return(
<figure className={index <= 0 ? 'hide' : "image is-32x32 arrow-left is-clickable"} onClick={slideLeft}>
<Image
   loader={() => left}
   src={left}
   width={400}
   height={250}
   alt="Image description"   
   />
</figure>

    )
}

export default SliderLeft