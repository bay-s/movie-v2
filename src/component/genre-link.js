import { Fragment, useEffect, useState } from "react";
const { default: Link } = require("next/link");

const GenreLink = ({id,type}) => {
    const [genre,setGenre] = useState([])
    const getGenre = async () => {
        const genres = await  fetch(
            `https://api.themoviedb.org/3/${type}/${id}?api_key=0ccbee0a69447c2b1bd0090bf76b0358`
            )
            const response = await genres.json()
         setGenre(response?.genres)
    } 

    useEffect(() => {
        getGenre()
    },[])
    
    return(
        genre?.map((item,index) => {
            return  <Fragment key={index}>
           <Link href={`/genre/${item.id}`} className="txt-white txt-xmall">
            {item?.name}
            {index < genre.length - 1 && ", "}
            </Link>
          </Fragment>
           })
    )
}
export default GenreLink