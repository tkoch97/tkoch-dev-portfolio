import './style.scss';
import aboutData from '../../utils/aboutData.json';

export function AboutContent() {

  const subjects = aboutData;

  return (
    <>
      <div className='aboutContent'>

        <div className='aboutContent__title'>
          Sobre Mim
        </div>

        <div className='aboutContent__main'>
          {subjects.map(subject => (
            <div className='aboutContent__subjectBlock' key={(String(subject.title))}>
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