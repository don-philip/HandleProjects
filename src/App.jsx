import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import SelectedProject from "./components/SelectedProject";
function App() {
  let selectedProject
  const [projectState,setProjectState]=useState({
    selectedProjectId:undefined,
    projects:[]
  })

  function handleStartProject(){
    setProjectState(prev=>{
      return {
        ...prev,
        selectedProjectId: null,
      }
    })
  }

  function handleAddProject(projectData){
    setProjectState(prev=>{
      const newProject={
        ...projectData,
        id:Math.random()
      }
      return{
        ...prev,
        selectedProjectId:undefined,
        projects:[...prev.projects,newProject]
      }
    })
  }

  function cancelAddProject(){
    setProjectState(prev=>{
      return {
        ...prev,
        selectedProjectId: undefined,
      }
    })
  }

  function handleSelectProject(id){
    setProjectState(prev=>{
      return {
        ...prev,
        selectedProjectId: id,
      }
    })
  }

  function handleDelete(){
    setProjectState(prev=>{
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter((project)=>project.id!==prev.selectedProjectId)
      }
    })
  }

  let content
  if(projectState.selectedProjectId===null){
    content=<NewProject onAddProject={handleAddProject} onCancelProject={cancelAddProject} />
  }
  else if(projectState.selectedProjectId===undefined){
    content=<NoProjectSelected onStartAddProject={handleStartProject}/>
  }else{
    selectedProject=projectState.projects.find(project=>project.id===projectState.selectedProjectId)
    content=<SelectedProject project={selectedProject} onDelete={handleDelete}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onSelectProject={handleSelectProject}  onStartAddProject={handleStartProject} selectedProjectId={projectState.selectedProjectId} projects={projectState.projects}/>
      {content}
    </main>
  );
}

export default App;
