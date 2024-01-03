import './style.scss'
import { SectionsTitle } from '../SectionsTitle';
import { TecnologieIcon } from '../TecnologieIcon';
import {tecnologiesData} from '../../utils/tecnologies_to_knowledge_content'

export function KnowledgeContent() {

  return (
    <>
      <div className='knowledgeContent'>

        <SectionsTitle text='Conhecimento'/>

        <div className='knowledgeContent__tecnologies'>
          {tecnologiesData.map(tecnologie =>(
            <TecnologieIcon key={(String(tecnologie.index))} data={tecnologie}/>
          ))}
        </div>
        
      </div>

    </>
  )
}