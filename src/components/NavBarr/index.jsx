import { Ancor } from '../Ancor';
import './style.scss';
import logo from "../../assets/logo-tkoch-sem-fundo.png";
import openMenuButton from "../../assets/openMenu-button.svg";
import brFlag from "../../assets/br-flag.svg";
import PropTypes from 'prop-types';

export function NavBarr(props) {
  const {link1, link2, link3, link4, link5} = props;

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
          <Ancor title='Sobre' href={link1}/>
          <Ancor title='Conhecimento' href={link2}/>
          <Ancor title='Educação' href={link3}/>
          <Ancor title='Projetos' href={link4}/>
          <Ancor title='Contato' href={link5}/>
          <img className='navBarr__languageButton' src={brFlag} alt="" />
        </nav>


        <button className='navBarr__openMenu'> 
          <img src={openMenuButton} alt="Open menu button" />
        </button>

      </div>
    </>
  )
}

NavBarr.propTypes = {
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
  link5: PropTypes.string,
};