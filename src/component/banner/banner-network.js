import Image from "next/image"
const Network = ({data}) => {

    return(
        <li className="is-flex flex-column align-start gap-1">
        <p className="is-title">Networks : </p>
       {
        data?.networks?.map(network => {
  const img =  `https://image.tmdb.org/t/p/w300/${network?.logo_path}`

           return (
               <figure className="thumbnail">
               <Image
  loader={() => img }
  src={img }
  width={400}
  height={250}
  alt="Image description"   
  />
               </figure>
           )
        })
       }
        </li>
    )
}

export default Network