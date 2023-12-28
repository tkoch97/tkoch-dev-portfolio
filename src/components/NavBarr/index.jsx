import { Ancor } from '../Ancor'
import './style.scss'
import logo from "../../assets/logo-tkoch-sem-fundo.png"

export function NavBarr(props) {
  const {link1, link2, link3, link4, link5, link6} = props;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return(
    <>
      <div className='navBarr'>

        <img className='navBarr__logo' src={logo} alt="logo" onClick={scrollToTop}/>
        
        <nav className='navBarr__nav'>
          <Ancor title='Sobre' href={link2}/>
          <Ancor title='Conhecimento' href={link3}/>
          <Ancor title='Educação' href={link4}/>
          <Ancor title='Projetos' href={link5}/>
          <Ancor title='Contato' href={link6}/>
        </nav>



      </div>
    </>
  )
}