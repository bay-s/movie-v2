import Link from "next/link"

const CastHistoryCard = ({movies,year,type}) => {
 
    return(
            movies.map((movie, index) => {
              const title = type === 'movie' ? movie?.title : movie?.name
              const job = type === 'movie' ? movie?.character : movie?.job
              const episodes = type  === 'tv' ? `(${movie?.episode_count} episode)...` : ''
                return(
            <ul className="is-flex align-start gap-2" key={index} >
                    <li>
                        <span className="txt-white txt-small">{year}</span>
                    </li>
                    <li className="is-flex flex-column">
                        <Link href={`/movie/${movie.id}`} className="txt-white txt-small is-title">{title}</Link>
                        <span className="txt-small has-text-grey-light">
                           {episodes} as <strong className="txt-white px-2">{movie?.character}</strong></span>
                    </li>
            </ul>
                )
            })
    )
}

export default CastHistoryCard