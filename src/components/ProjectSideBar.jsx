function ProjectSideBar({onStartAddProject,projects,onSelectProject,selectedProjectId}){
    return(
   <aside className="w-1/3 bg-stone-900 text-stone-300 px-8 py-16 rounded-r-xl">
        <h2 className="mb-4 font-bold uppercase md:text-xl text-stone-300">Your Projects</h2>
        <div>
            <button onClick={onStartAddProject} className="bg-stone-600 text-stone-300 hover:bg-stone-700 px-3 py-1 rounded-md  ">+ Add Project</button>
        </div>
        <ul className="mt-8">
            {projects.map(project=> 
            {
                let cssClasses="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 "
                if(project.id===selectedProjectId){
                    cssClasses += "bg-stone-800 text-stone-200"
                }
                else
                {
                    cssClasses+= "text-stone-400"
                }
                return (
                    <li key={project.id}>
                        <button onClick={()=>{onSelectProject(project.id)}} className={cssClasses}>{project.title}</button>
                    </li>
                )
            })}
        </ul>
   </aside>
   )
}
export default ProjectSideBar