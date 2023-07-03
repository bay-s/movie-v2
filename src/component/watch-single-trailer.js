import { getSingleTvTrailer } from "@/lib/get-single-tv-trailer"
import { Fragment, useEffect, useState } from "react"
import ModalVideoCard from "./card/modal-video-card"
import { getSingleMovieTrailer } from "@/lib/get-single-movie-trailer"

const WatchSingleTrailerButton = ({id,type}) => {
    const [url,setUrl] = useState('')
    const [open,setOpen] = useState(false)
    const [isHasTrailer,setIsHasTrailer] = useState(true)

    const getTrailer = async () => {

        if(type === 'tv'){
            const movieTrailer = await getSingleTvTrailer(id)
            console.log(movieTrailer);
            if(movieTrailer?.error){
              setIsHasTrailer(false)
 
            }
        }else if(type === 'movie'){
            const movieTrailer = await getSingleMovieTrailer(id)
            if(movieTrailer?.error){
              setIsHasTrailer(false)
            }
        }
    }

    useEffect(() => {
        getTrailer()
    },[])

    const playVideo = async e => {
        e.preventDefault()
        const movieId = e.currentTarget.dataset.id
        if(type === 'tv'){
            const result = await getSingleTvTrailer(movieId)
            setUrl(result?.url)
            console.log(result);
        }else if(type === 'movie'){
         const result = await getSingleMovieTrailer(movieId)
         setUrl(result?.url)
        }else{
            alert("Something wen wrong")
            return
        }
        setOpen(!open)
 
    }

    const value = {
        playVideo,
        url,
        open,
        title:''
    }

    console.log(isHasTrailer);
    console.log(type);
    return(
    <Fragment>
     {
        isHasTrailer ? <button className="button is-danger is-small is-rounded" data-id={id} onClick={playVideo}>Watch Trailer</button>
        : ""
     }
    <ModalVideoCard  data={value} />        
    </Fragment>
    )
}

export default WatchSingleTrailerButton