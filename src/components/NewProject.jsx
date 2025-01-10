import { useRef } from "react"
function NewProject({onAddProject}){
    const title=useRef()
    const description=useRef()
    const dueDate=useRef()
    function handleSave(){
        const enteredTitle=title.current.value;
        const enteredDescription=description.current.value;
        const enteredDueDate=description.current.value;
        onAddProject({
            title:enteredTitle,
            description:enteredDescription,
            dueDate:enteredDueDate
        })
    }

    return(
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className=" px-3 py-1 rounded-md bg-stone-700 text-stone-300 hover:text-stone-950">Cancel</button></li>
                <li><button onClick={handleSave} className=" px-3 py-1 rounded-md bg-stone-700 text-stone-50 hover:bg-stone-950">Save</button></li>
            </menu>
            <div>
                <p className="flex flex-col gap-1 my-4">
                    <label className="text-sm font-bold uppercase text-stone-500">Title</label>
                    <input type="text" ref={title} className="w-full p-1 norder-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"/>
                </p>
                <p>
                    <label className="text-sm font-bold uppercase text-stone-500">Description</label>
                    <textarea ref={description} className="w-full p-1 norder-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"/>
                </p>
                <p>
                    <label className="text-sm font-bold uppercase text-stone-500">Due Date</label>
                    <input type="date" ref={dueDate} className="w-full p-1 norder-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"/>
                </p>
            </div>
        </div>
    )
}
export default NewProject