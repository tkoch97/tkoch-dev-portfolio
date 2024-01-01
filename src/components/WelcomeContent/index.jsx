import './style.scss';
import myPhotoWelcome from '../../assets/myPhotoWelcome.svg';
import { HiOutlineArrowLongDown } from "react-icons/hi2";
import { Button } from '../Button';
import PropTypes from 'prop-types';

export function WelcomeContent(props) {

  const {link} = props

  return(
    <>
      <div className='welcomeContent'>

        <div className='welcomeContent__main'>

          <img  className='welcomeContent__myPhoto' src={myPhotoWelcome} 
          alt='homem branco com barba e cabelos pretos, 
          sorrindo e usando uma touca preta e com headset no ouvido'/>

          <div className='welcomeContent__textsContainer'>

            <h1 className='welcomeContent__introduction'>
              Olá! Eu sou o <span>Thiago,</span>
            </h1>

            <h1 className='welcomeContent__professionalTitle'>
              desenvolvedor web <span>fullstack.</span>
            </h1>

            <p className='welcomeContent__salute'>
              Seja <span>bem vindo(a)</span> ao meu portfólio!
            </p>

          </div>

        </div>

        <div className='welcomeContent__actionButton'>
          <Button className='buttonStructure' title='VEM COMIGO' icon={HiOutlineArrowLongDown} link={link}/>
        </div>
      </div>
      
    </>
  )
}

WelcomeContent.propTypes = {
  link: PropTypes.string
};