import './style.scss';
import { NavBarr } from '../../components/NavBarr';
import { AboutContent } from '../../components/AboutContent';
import { ContactContent } from '../../components/ContactContent';
import { EducationContent } from '../../components/EducationContent';
import { Footer } from '../../components/Footer';
import { KnowledgeContent } from '../../components/KnowledgeContent';
import { MobileMenu } from '../../components/MobileMenu';
import { ProjectsContent } from '../../components/ProjectsContent';
import { WelcomeContent } from '../../components/WelcomeContent';

function Page() {

  const links = {
    link1: '#about',
    link2: '#knowledge',
    link3: '#education',
    link4: '#projects',
    link5: '#contact',
  }

  return (
    <div className='container'>
      <div className='container__mobileMenu'>
        <MobileMenu/>
      </div>

      <div className='container__NavBarr'>
        <NavBarr links={links}/>
      </div>

      <div className='container__main'>

        <div className='container__welcomeSection' id='welcome'>
          <WelcomeContent link='#about'/>
        </div>
        <div className='container__aboutSection' id='about'>
          <AboutContent/>
        </div>
        <div className='container__knowledgeSection' id='knowledge'>
          <KnowledgeContent/>
        </div>
        <div className='container__educationSection' id='education'>
          <EducationContent/>
        </div>
        <div className='container__projectsSection' id='projects'>
          <ProjectsContent/>
        </div>
        <div className='container__contactSection' id='contact'>
          <ContactContent/>
        </div>

      </div>

      <div className='container__footer'>
        <Footer/>
      </div>
    </div>
  )
}

export default Page
