import './style.scss'
import { educationData } from '../../utils/educationData';
import { SectionsTitle } from '../SectionsTitle';

export function EducationContent() {

  const informations = educationData;

  return (
    <>
    <div className='educationContent'>
      <SectionsTitle text='Educação'/>

      <div className='educationContent__main'>
        {informations.map(information => (
          <div className='educationContent__informationBlock' key={String(information.index)}>
            <h2 className='educationContent__course'>
              {information.course}
            </h2>
            <p className='educationContent__level'>
              {information.level}
            </p>
            <p className='educationContent__institution'>
              {information.institution}
            </p>
            <p className='educationContent__period'>
              {information.period}
            </p>
            <p className='educationContent__about'>
              {information.about}
            </p>
          </div>
        ))}
      </div>
    </div>
    
    </>
  )
}