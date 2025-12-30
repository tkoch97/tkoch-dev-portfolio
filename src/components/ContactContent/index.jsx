import { useTranslation } from 'react-i18next'
import { ContactForm } from '../ContactForm'
import { SocialMediaLinks } from '../SocialMediaLinks'
import './style.scss'

export function ContactContent() {

  const {t} = useTranslation();

  const placeholders = [
    {
      name:t("contactSection.contactForm_nameInputPlaceholder"),
      email:t("contactSection.contactForm_emailAddressInputPlaceholder"),
      message:t("contactSection.contactForm_messageInputPlaceholder"),
    }
  ]

  return(
    <>
      <div className='contactContent'>

        <h2 className='contactContent__title'>
          {t("contactSection.contactContent_titleText")}
        </h2>

        <ContactForm placeholders={placeholders}/>
      
        <SocialMediaLinks className="socialMediaLinksStructure"/>

      </div>
    </>
  )
}