function ProjectSideBar({onStartAddProject}){
    return(
   <aside className="w-1/3 bg-stone-900 text-stone-300 px-8 py-16 rounded-r-xl">
        <h2 className="mb-4 font-bold uppercase md:text-xl text-stone-300">Your Projects</h2>
        <div>
            <button onClick={onStartAddProject} className="bg-stone-600 text-stone-300 hover:bg-stone-700 px-3 py-1 rounded-md">+ Add Project</button>
        </div>
        <ul></ul>
   </aside>
   )
}
export default ProjectSideBar