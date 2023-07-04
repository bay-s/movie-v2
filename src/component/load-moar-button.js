import { ValueContext } from "@/pages/value-context"
import { useContext } from "react"


const LoadMore = ({page,setPage}) => {
    const value = useContext(ValueContext)
    const loadMorePage = (e) => {
        e.preventDefault()
        value?.setIsLoading(true)
        setPage(prevPage => prevPage + 1);
    }
 
    return(
      <div className="w-100 my-3">
      {
           value.isLoading ? <button className="button is-primary is-loading" disabled>Load More</button>
           : <button className="button is-primary" onClick={loadMorePage}>Load More</button>
      }
    </div>
    )
}

export default LoadMore