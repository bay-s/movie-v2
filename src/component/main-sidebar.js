import Link from "next/link"
import SidebarDropdown from "./main-sidebar-dropdown"

const MainSidebar = ({sidebar}) => {

return(
<aside className=" has-background-black" id="main-sidebar" ref={sidebar} >

  <section class="menu"  >
  <h3 class="is-size-5 is-title txt-white is-bold p-4 ">
    {/* My Movie App */}
    Movie Info List
  </h3>

  <ul class="menu-list">
    <li>
    <Link href={`/`} className="is-flex align-center gap-2">
  <i class="fa fa-home has-text-grey-light" aria-hidden="true"></i>
<span className="has-text-grey-light">Home</span>
  </Link>
    </li>
    <li>
    <Link href='https://github.com/bay-s/movie-v2' legacyBehavior>
  <a target="_blank" className="is-flex align-center gap-2" rel="noopener noreferrer">
  <i class="fa fa-github has-text-grey-light" aria-hidden="true"></i>
<span className="has-text-grey-light">Github</span>
   </a>
  </Link>
    </li>
    {/* <li>
  <a className="is-flex align-center gap-2">
<i class="fa fa-heart has-text-grey-light" aria-hidden="true"></i>
<span className="has-text-grey-light">Favorite</span>
  </a>
    </li> */}
  </ul>
 
 <hr className="divider" />
 
 <ul class="menu-list">
    {/* <li>
    <Link href={`/genre`} className="is-flex align-center gap-2">
  <i class="fa fa-film has-text-grey-light" aria-hidden="true"></i>
<span className="has-text-grey-light txt-small">Genre</span>
  </Link>
    </li> */}
    <li>
    <Link href={`/trending`} className="is-flex align-center gap-2">
  <i class="fa fa-fire has-text-grey-light" aria-hidden="true"></i>
<span className="has-text-grey-light txt-small">Trending</span>
  </Link>
    </li>
    <li>
  <Link href={`/anime`} className="is-flex align-center gap-2">
  <i class="fa fa-film has-text-grey-light" aria-hidden="true"></i>
<span className="has-text-grey-light txt-small">Anime</span>
  </Link>
    </li>
 <li>
<SidebarDropdown />
</li>
<li>
  <Link href='https://developer.themoviedb.org/reference/intro/getting-started' legacyBehavior>
  <a target="_blank" className="is-flex align-center gap-2" rel="noopener noreferrer">
  <i class="fa fa-imdb has-text-grey-light" aria-hidden="true"></i>
<span className="has-text-grey-light">TMDB Api</span>
   </a>
  </Link>
    </li>
  </ul>

 
{/* <ul class="menu-list">
<hr className="divider" />
    <li>
  <Link href={`/profile/setting`} className="is-flex align-center gap-2">
<i class="fa fa-cog has-text-grey-light" aria-hidden="true"></i>
<span className="has-text-grey-light">Setting</span>
  </Link>
    </li>
<li>
  <a className="is-flex align-center gap-2">
<i class="fa fa-sign-out has-text-grey-light" aria-hidden="true"></i>
<span className="has-text-grey-light">Log out</span>
  </a>
</li>
 
 
</ul> */}

</section>

    </aside>
)
}

export default MainSidebar