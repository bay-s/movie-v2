import { useEffect, useState } from "react"
import PersonRoleCard from "./person-role-card"
import CastHistory from "./cast-history"
import CrewHistory from "./crew-history"
 
const PersonPageCenter = ({person}) => {
    const [movieRole,setMovieRole] = useState([])
    const [tvRole,setTvRole] = useState([])
    const [selectValue, setSelectValue] = useState('movie')
    const getPersonRole = async () => {
        const api_key = process.env.NEXT_PUBLIC_API_KEY
        const movie = await fetch(`https://api.themoviedb.org/3/person/${person?.id}/movie_credits?api_key=${api_key}`)
        const tv = await fetch(`https://api.themoviedb.org/3/person/${person?.id}/tv_credits?api_key=${api_key}
        `)

        const tvResult = await tv.json()
        const movieResult = await movie.json()
 
        setTvRole(tvResult)
        setMovieRole(movieResult )
    }

useEffect(() => {
getPersonRole()
},[])


const handlerSelectValue = (e) => {
    const value = e.target.value
    setSelectValue(value)
  }
 
 const data = {
    handlerSelectValue,
    tv:tvRole,
    movie:movieRole,
    selectValue
 }

 
    return(
<div className="column is-8  is-flex flex-column gap-2 align-start px-5 is-clipped ">

<h2 className="is-title is-bold is-size-3 txt-white">{person?.name}</h2>
<div className="is-flex flex-column gap-1">
 <h4 className="is-bold is-size-5">Biography</h4>
 <p className="txt-small lh-lg txt-white">{person?.biography
=== '' ? `We do not have a biography about ${person?.name} yet.` : person?.biography}</p>
</div>

<h4 className="is-bold is-size-5">Role</h4>
<div className="columns is-flex-mobile " id="cast-container">
 {
    movieRole?.cast?.slice(0,10)?.map(movie => {
      return <PersonRoleCard  data={movie} type='movie' />
    })
 }
{
    tvRole?.cast?.slice(0,10)?.map(movie => {
      return <PersonRoleCard  data={movie} type='tv' />
    })
 }
</div>

<CastHistory data={data}/>
{/* <CrewHistory movie={movieRole} tv={tvRole} /> */}
</div>
    )
}
export default PersonPageCenter