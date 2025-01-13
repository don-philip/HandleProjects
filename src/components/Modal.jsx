import { useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"
function Modal({children,ref,buttonCaption}){
    const dialog=useRef()
    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal()
            }
        }
    })
    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form action="" method="dialog" className="mt-4 text-right">
                <button className="bg-stone-600 text-stone-300 hover:bg-stone-700 px-3 py-1 rounded-md">{buttonCaption}</button>
            </form>
        </dialog>,document.getElementById('modal-root')
    )
}
export default Modal