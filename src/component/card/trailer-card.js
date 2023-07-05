import Image from "next/image";
import { Fragment, useState } from "react";
import ModalVideoCard from "./modal-video-card";

const TrailerCard = ({trailer,images,type}) => {
    const noImg = '/img/no-image.png'
    const [data,setData] =  useState(
        {
            isPlay:false,
            videoUrl:''
        }
    )
    
    const playVideo = (e) => {
        e.preventDefault()
        const url = e.target.dataset?.videourl
        const titles = e.target.dataset.title
      setData({...data ,
        isPlay:!data.isPlay,
        videoUrl:url,
        title:titles
    })
    }

 const value = {
    open:data.isPlay,
    url:data.videoUrl,
    playVideo,
    title:data.title
 }
    return(
 <Fragment>
    {
 trailer?.map((item,index )=> {
  const img = `https://image.tmdb.org/t/p/w500/${images[index]?.backdrop_path}`
  const noImage = !images[index]?.backdrop_path
  const title =  type === 'tv' ? images[index]?.name
  : images[index]?.title
   return(
<div className={`column fade is-one-third-mobile is-4-tablet is-3 ${noImage ? 'hide' : ''}`} key={images[index]?.id}>
           <div class="card trailer-card no-bg">
               <figure class="image is-4by3">
               <Image
           loader={() => img}
           src={img}
           width={400}
           height={250}
           alt="Image description"   
           />
               </figure>
               <figcaption className="is-flex flex-column">
               <div className="is-flex flex-column gap-1 p-3 my-auto align-center">
               <i class="fa fa-play txt-white is-size-3 is-clickable" data-videoUrl={item} aria-hidden="true" data-title={title} onClick={playVideo }></i>
               <h3 className="is-title is-bold">
                {title}
               </h3>
               </div>
            
               </figcaption>
           </div>
           
           </div>
                 )
 })
             
    }

    <ModalVideoCard  data={value} />
 </Fragment>
    )
}

export default TrailerCard


 