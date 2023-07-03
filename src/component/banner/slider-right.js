const { default: Image } = require("next/image")

 const SliderRight = ({slideRight,index,length}) => {
    const right = '/img/right.png'
    return(
        <figure className={index > length - 5 ? "hide" : "image is-32x32 arrow-right is-clickable"} onClick={slideRight}>
<Image
   loader={() => right}
   src={right}
   width={400}
   height={250}
   alt="Image description"   
   />
</figure>
    )
 }

 export default SliderRight