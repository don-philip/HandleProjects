import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
function App() {
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

  

  let content
  if(projectState.selectedProjectId===null){
    content=<NewProject onAddProject={handleAddProject} onCancelProject={cancelAddProject} />
  }
  else if(projectState.selectedProjectId===undefined){
    content=<NoProjectSelected onStartAddProject={handleStartProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar  onStartAddProject={handleStartProject} projects={projectState.projects}/>
      
      {content}
    </main>
  );
}

export default App;
