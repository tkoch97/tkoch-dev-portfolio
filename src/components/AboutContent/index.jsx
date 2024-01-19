import './style.scss';
import { AboutData } from '../../utils/aboutData';
import { SectionsTitle } from '../SectionsTitle';
import { useTranslation } from 'react-i18next';

export function AboutContent() {

  const {t} = useTranslation();

  const subjects = AboutData();

  return (
    <>
      <div className='aboutContent'>

        <SectionsTitle text={t("aboutContent_titleText")}/>

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