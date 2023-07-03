import { ValueContext } from "@/pages/value-context"
import { useContext } from "react"


const LoadMoar = ({selectValue,dataMovie,setDataMovie}) => {
    const value = useContext(ValueContext)
    const loadMorePage = (e) => {
        e.preventDefault()
        value?.setIsLoading(true)
        if(selectValue === 'tv'){
            setDataMovie({...dataMovie,
              pageTv:dataMovie.pageTv + 1
            })
          }else if(selectValue === 'movie'){
            setDataMovie({...dataMovie,
              pageMovie:dataMovie.pageMovie + 1
            })
          }
    }
 
    return(
  <div className="column my-3">
    {
            value.isLoading ? <button className="button is-primary is-loading w-100" disabled>Load More</button>
            : <button className="button is-primary w-100" onClick={loadMorePage}>Load More</button>
    }
  </div>
    )
}

export default LoadMoar