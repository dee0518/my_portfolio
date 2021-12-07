import { useParams } from "react-router"
import ProjectDetailView from "./presenter/ProjectDetailView"

// data
import latestList from "../../LatestList"

function ProjectDetailContainer(){
    const { id } = useParams()
    const project = latestList.filter(item => item.id == id)[0]

    return (
        <ProjectDetailView project={project}/>
    )
}

export default ProjectDetailContainer