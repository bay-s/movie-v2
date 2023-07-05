import { useRef, useState } from "react"
import Header from "./header"
import MainSidebar from "./main-sidebar"
import ModalCloseSidebar from "./card/modal-close-sidebar"

 
const MainLayout = (props) => {
    const sidebar = useRef(null)
    const [open,setOpen] = useState(false)
    const openSidebar = (e) => {
        e.preventDefault()
        setOpen(!open)
        sidebar?.current.classList.toggle('open-sidebar')
    }
    return(
<>
 {/* <Header />  */}
<main class=" " id="page-container">
     <MainSidebar sidebar={sidebar} />
     <div className="is-flex flex-column gap-2" id="main-pages">
        <Header openSidebar={openSidebar} />
     {props.children}
     </div>
</main>
{/* <Footer /> */}
<ModalCloseSidebar open={open} openSidebar={openSidebar} />
</>
    )
}

export default  MainLayout


 