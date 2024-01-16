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

  return(
    <>
      <div className='contactContent'>

        <h2 className='contactContent__title'>
          Me envie um email através do formulário abaixo
        </h2>

        <ContactForm placeholders={placeholders}/>
      
        <SocialMediaLinks className="socialMediaLinksStructure"/>

      </div>
    </>
  )
}