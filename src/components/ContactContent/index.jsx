import { ContactForm } from '../ContactForm'
import { SocialMediaLinks } from '../SocialMediaLinks'
import './style.scss'

export function ContactContent() {

  const placeholders = [
    {
      name:"Seu nome",
      email:"Seu email",
      message:"Escreva sua mensagem aqui",
    }
  ]

  const socialMediaLinks = [
    {
      linkedIn:"https://www.linkedin.com/in/tkoch97/",
      instagram:"https://www.instagram.com/tkoch.dev/",
      github:"https://github.com/tkoch97",
    }
  ]

  return(
    <>
      <div className='contactContent'>

        <h2 className='contactContent__title'>
          Me envie um email através do formulário abaixo
        </h2>

        <ContactForm placeholders={placeholders}/>
      
        <SocialMediaLinks className="socialMediaLinksStructure" links={socialMediaLinks}/>

      </div>
    </>
  )
}