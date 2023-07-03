import Link from "next/link"
import { useState } from "react"


const SidebarDropdown = () => {
  const [open,setOpen] = useState(false)

  const openDropDown = (e) => {
   e.preventDefault()
   setOpen(!open)
  }
return(
 <div href="#" class=" ">

<a href="#" className={`is-flex align-center gap-2 ${open ? 'opens' : ''}`} id="open-dropdown" onClick={openDropDown}>
  <i class="fa fa-film has-text-grey-light" aria-hidden="true"></i>
<span className="has-text-grey-light txt-small">Tv Series</span>
</a>
 
<div className={`sidebar-dropdown ${open ? 'open' : ''}`} >
<ul class="sidebar-dropdown-list no-border p-0 m-0">
<li>
  <Link href={`/tv`} className="is-flex align-center gap-2 px-5">
<span className="has-text-grey-light">Popular</span>
  </Link>
    </li>
<li>
<Link href={`/tv/now-playing`} className="is-flex align-center gap-2 px-5">
<span className="has-text-grey-light">Now Playing</span>
  </Link>
</li>
<li>
<Link href={`/tv/top-rate`} className="is-flex align-center gap-2 px-5">
<span className="has-text-grey-light">Top Rate</span>
  </Link>
</li>
</ul>
</div>

  </div>
)
}

export default SidebarDropdown