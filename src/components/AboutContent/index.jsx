import './style.scss';
import { aboutData } from '../../utils/aboutData';
import { SectionsTitle } from '../SectionsTitle';

export function AboutContent() {

  const subjects = aboutData;

  return (
    <>
      <div className='aboutContent'>

        <SectionsTitle text='Sobre mim'/>

        <div className='aboutContent__main'>
          {subjects.map(subject => (
            <div className='aboutContent__subjectBlock' key={subject.title}>
              <h2 className='aboutContent__subjectTitle'>
                {subject.title}
              </h2>
              <p className='aboutContent__subjectText'>
                {subject.text}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    
    </>
  )
}