import { useRouter } from "next/router"
import { useState } from "react"

const HeaderSearchForm = () => {
  const [searchValue,setSearchValue] = useState('')
  const router = useRouter()

  const handlerSearch = (e) => {
 
    setSearchValue(e.target.value)

  }
  
  const submitSearch = (e) => {
    e.preventDefault()
    if(searchValue === ''){
alert(":test")
return
    }else{
      router.push(`/search?query=${encodeURIComponent(searchValue)}`);
    }
  }
    return(
        <form class="field" onSubmit={submitSearch}>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-primary no-bg txt-white" name="search" type="text" placeholder="Search movie or tv series" onChange={handlerSearch}/>
          <span class="icon is-small is-left">
            <i class="fa fa-check fa-xs"></i>
          </span>
          <button class="icon is-small is-right no-bg no-border mt-1">
            <i class="fa fa-search fa-xs txt-white is-clickable is-bold" ></i>
          </button>
        </div>
      </form>
    )
}

export default HeaderSearchForm