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
  let content
  if(projectState.selectedProjectId===null){
    content=<NewProject/>
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
