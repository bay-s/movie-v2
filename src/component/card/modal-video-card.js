import { ValueContext } from "@/pages/value-context"
import { useContext, useEffect } from "react"
import LoadingCard from "./loading-card"

const ModalVideoCard = ({data}) => {
    // const value = useContext(ValueContext)
  
    // useEffect(() => {
    //    if(data){
    //     console.log('boca');
    //     value?.setIsLoading(true)
    //    }
    // },[])

    // console.log(value.isLoading);
return(
<div className={`modal ${data.open ? 'is-active' : ''}`}>
  <div class="modal-background" onClick={data.playVideo}></div>
  <div class="modal-card modal-video">
 
    <section class="modal-card-body p-0">
    <iframe className="responsive-iframe" src={data.url}></iframe>
    </section>

  </div>
  <button class="modal-close is-large" aria-label="close" onClick={data.playVideo }></button>
</div>
)
}

export default ModalVideoCard 