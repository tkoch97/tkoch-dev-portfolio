import { Button } from '../Button';
import './style.scss';
import PropTypes from 'prop-types';

export function ContactForm(props) {

  const {placeholders} = props;
  console.log(placeholders)

  return(
    <div className="contactFormStructure">

      <input type="text" id="inputName" placeholder={placeholders[0].name} className="contactFormStructure__name"/>

      <input type="email" id="email"  placeholder={placeholders[0].email} className="contactFormStructure__email"/>

      <textarea name="message" id="message"  
      className="contactFormStructure__message"
      placeholder={placeholders[0].message}></textarea>
      
      <div className='contactFormStructue__button'>
        <Button title='ENVIAR'/>
      </div>

    </div>
  )
}


ContactForm.propTypes = {
  placeholders: PropTypes.array
};