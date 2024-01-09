import './style.scss'
import { ProjectCard } from '../ProjectCard'
import { SectionsTitle } from '../SectionsTitle';
import { projectsData } from '../../utils/projects_data';

export function ProjectsContent() {

  return(
    <>
      <div className='projectsContent'>
        <SectionsTitle text='Projetos'/>

        <div className='projectsContent__main'>
          {projectsData.map(projectData => (
            <ProjectCard data={projectData} key={projectData.index}/>
          ))}
        </div>
      </div>
    </>
  )
}