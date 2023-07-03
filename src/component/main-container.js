import Header from "./header"
import MainSidebar from "./main-sidebar"

 
const MainLayout = (props) => {

    return(
<>
 {/* <Header />  */}
<main class=" " id="page-container">
     <MainSidebar />
     <div  id="main-pages">
     {props.children}
     </div>
</main>
{/* <Footer /> */}
</>
    )
}

export default  MainLayout


 