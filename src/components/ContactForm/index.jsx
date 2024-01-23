import { useState } from 'react';
import { Button } from '../Button';
import './style.scss';
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

export function ContactForm(props) {

  const {placeholders} = props;

  const {t} = useTranslation();

  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if(!name || !email || !message) {
      return alert("Por favor, preencha todos os campos")
    } else if (!emailPattern.test(email)) {
      return alert("Por favor, insira um endereço de e-mail válido.")
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message
    }

    emailjs.send("service_2tf01vl", "template_6kb9hp4", templateParams, "YHmljYz7kEXcMhkzE")
    .then(() => {
      alert("Email enviado com sucesso! / Email sent successfully!")
      setName('');
      setEmail('')
      setMessage('')
      document.querySelector(".contactFormStructure__name").value = '';
      document.querySelector(".contactFormStructure__email").value = '';
      document.querySelector(".contactFormStructure__message").value = '';
    }, () => {
      alert(`Houvel algum erro ao enviar o aemail. Por favor, tente mais tarde./
      An error occurred while trying to send the e-mail. Please, try again later.`)
    })
  }

  return(
    <form className="contactFormStructure" onSubmit={sendEmail}>

      <input type="text" name='name' 
      id="inputName" placeholder={placeholders[0].name} 
      className="contactFormStructure__name"
      onChange={(e) => setName(e.target.value)}
      />

      <input type="email" name='email' 
      id="email"  placeholder={placeholders[0].email} 
      className="contactFormStructure__email"
      onChange={(e) => setEmail(e.target.value)}
      />

      <textarea name="message" id="message"  
      className="contactFormStructure__message"
      placeholder={placeholders[0].message}
      onChange={(e) => setMessage(e.target.value)}
      />
      
      <div className='contactFormStructue__button'>
        <Button type='submit' title={t("contactForm_submitButtonText")}/>
      </div>

    </form>
  )
}


ContactForm.propTypes = {
  placeholders: PropTypes.array
};