import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const CastCard  = ({id,type}) => {
    const [casts,setCasts] = useState([])
    const noImg = '/img/no-image.png'
    const getCasts = async () => {
 
          try {
    
            const Cast = await fetch(
                `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=0ccbee0a69447c2b1bd0090bf76b0358`
              )
               const dataCast = await Cast.json()
      console.log(dataCast);
            setCasts(dataCast?.cast)
         } catch (error) {
           console.log("Error fetching anime series:", error);
           return [];
         }
    }
    useEffect(() => {
        getCasts()
    },[id])

 
    return(
    casts?.slice(0,30).map(cast => {
     const img =  `https://image.tmdb.org/t/p/w500/${cast?.profile_path}`
 
        return (
 <div className="column is-3 is-one-third-mobile  p-2">
 
<figure class="article">

<Image
loader={() => !cast?.profile_path ? noImg : img}
src={!cast?.profile_path ? noImg : img}
width={400}
height={250}
alt="Image description"   
/>

<figcaption className="is-flex flex-column">
 
<div className="is-flex flex-column p-3 my-auto"> 
<h3 className="is-title is-bold">
 <Link href={`/person/${cast?.id}`} className="has-text-info is-bold">
 {cast?.name}
 </Link>
</h3>
<p>{cast?.character}</p>
 
</div>

</figcaption>

</figure>
            </div>
        )
    })
    )
}

export default CastCard