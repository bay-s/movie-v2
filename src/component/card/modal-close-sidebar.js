

const ModalCloseSidebar = ({open,openSidebar}) => {

    return(
<div className={`modal ${open ? 'is-active' : ''}`}>
  <div class="modal-background" onClick={openSidebar}></div>
  <button class="modal-close is-large" aria-label="close" onClick={openSidebar}></button>
</div>
    )
}

export default ModalCloseSidebar