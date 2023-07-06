import HeaderSearchForm from "./header-search-form"

 
const Header = ({openSidebar}) => {
    return (
<header className="header py-1">
<nav class="navbar no-bg align-center" role="navigation" aria-label="main navigation">
  <div class="navbar-brand align-center">

 <HeaderSearchForm />
 <button role="button"  class="navbar-burger mb-2" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={openSidebar}>
    <i class="fa fa-bars txt-white is-bold is-size-5" aria-hidden="true"></i>
    </button>
  </div>

 
    <div class="navbar-end">
   
    </div>
    
   
</nav>

</header>
    )
}
export default Header