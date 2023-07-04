import Link from "next/link"
 
const CrewHistoryCard = ({movies,year}) => {
 
    return(
            movies.map(movie  => {
 
                return(
            <ul className="is-flex align-start gap-2" key={movie?.id} >
                    <li>
                        <span className="txt-white txt-small">{year}</span>
                    </li>
                    <li className="is-flex flex-column">
                        <Link href={`/movie/${movie.id}`} className="txt-white txt-small is-title">{movie?.name}</Link>
                        <span className="txt-small has-text-grey-light">
                           ({movie?.episode_count} episode)...<strong className="txt-white px-2">{movie?.job}</strong></span>
                    </li>
            </ul>
                )
            })
    )
}

export default CrewHistoryCard