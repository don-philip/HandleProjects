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
        projects:[...prev.projects,newProject]
      }
    })
  }
  console.log(projectState);
  

  let content
  if(projectState.selectedProjectId===null){
    content=<NewProject onAddProject={handleAddProject}/>
  }
  else if(projectState.selectedProjectId===undefined){
    content=<NoProjectSelected onStartAddProject={handleStartProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject={handleStartProject}/>
      
      {content}
    </main>
  );
}

export default App;
