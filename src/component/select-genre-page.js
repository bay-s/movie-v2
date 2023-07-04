import { useRouter } from "next/router"

const SelectGenrePages = ({pages}) => {
   const router = useRouter()
    const handlerSelectValue = (e) => {
        const value = e.target.value
        router.push(`/genre/${value}/${pages[0]}-${pages[1]}`)
      }
     
    return(
<div class="select is-primary select-menu mx-auto">
  <select className="no-bg" onChange={handlerSelectValue}>
    <option value='movie'>Movie</option>
    <option value='tv'>Tv Series</option>
  </select>
</div>
    )
}

export default SelectGenrePages