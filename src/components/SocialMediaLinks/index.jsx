import './style.scss';
import PropTypes from 'prop-types';

export function SocialMediaLinks(props) {

  const {...rest} = props
  

  return(
    <>
      <div className='socialMediaLinksStructure' {...rest}>
        <button className='socialMediaLinksStructure__linkedIn'>
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M39.9612 0H3.18589C1.42721 0 0 1.39364 0 3.10977V40.0439C0 41.7625 1.42721 43.1579 3.18589 43.1579H39.9612C41.7211 43.1579 43.1579 41.7625 43.1579 40.0439V3.10977C43.1579 1.39364 41.7211 0 39.9612 0ZM12.7999 36.7765H6.39576V16.1812H12.7999V36.7765ZM9.59784 13.3652C7.54604 13.3652 5.88746 11.7024 5.88746 9.65238C5.88746 7.60538 7.54604 5.9426 9.59784 5.9426C11.6448 5.9426 13.3076 7.60538 13.3076 9.65238C13.3076 11.7024 11.6448 13.3652 9.59784 13.3652ZM36.7741 36.7765H30.3802V26.7615C30.3802 24.3722 30.3334 21.3002 27.0528 21.3002C23.7213 21.3002 23.2136 23.9023 23.2136 26.5883V36.7771H16.8148V16.1812H22.9558V18.9937H23.0433C23.8981 17.3752 25.9864 15.6675 29.101 15.6675C35.5783 15.6675 36.7747 19.9318 36.7747 25.4793L36.7741 36.7765Z" fill="#7A7A7A"/>
          </svg>
        </button>
        <div className='socialMediaLinksStructure__instagram'>
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.1034 0.129474C15.4052 0.0239722 16.1389 0 22 0C27.8622 0 28.5947 0.0251689 30.8952 0.129474C33.1934 0.233778 34.7627 0.599424 36.1354 1.13289C37.5751 1.67494 38.8792 2.52423 39.9572 3.62167C41.0548 4.6995 41.9042 6.00377 42.446 7.44354C42.9794 8.8162 43.3439 10.3855 43.4494 12.6824C43.555 14.9842 43.5789 15.7179 43.5789 21.5789C43.5789 27.44 43.5538 28.1737 43.4494 30.4756C43.3451 32.7723 42.9794 34.3417 42.446 35.7143C41.8946 37.1327 41.156 38.3374 39.9572 39.5362C38.8794 40.6337 37.5751 41.4832 36.1354 42.025C34.7627 42.5584 33.1934 42.9229 30.8966 43.0284C28.5947 43.134 27.861 43.1579 22 43.1579C16.1389 43.1579 15.4052 43.1328 13.1034 43.0284C10.8065 42.9241 9.23722 42.5584 7.86456 42.025C6.44633 41.4736 5.24152 40.735 4.04269 39.5362C2.94505 38.4584 2.0957 37.154 1.55392 35.7143C1.02044 34.3417 0.655996 32.7723 0.550494 30.4756C0.444993 28.1737 0.421021 27.4412 0.421021 21.5789C0.421021 15.7167 0.446189 14.9842 0.550494 12.6836C0.654799 10.3855 1.02044 8.8162 1.55392 7.44354C2.09596 6.00387 2.94525 4.69966 4.04269 3.62167C5.1205 2.52403 6.42477 1.67468 7.86456 1.13289C9.23722 0.599424 10.8065 0.234975 13.1034 0.129474ZM30.7202 4.01368C28.4448 3.91058 27.7615 3.8878 22 3.8878C16.2384 3.8878 15.5551 3.91058 13.2797 4.01368C11.1757 4.10959 10.0332 4.46084 9.27318 4.75696C8.26616 5.14778 7.54686 5.61531 6.7916 6.37058C6.03755 7.12584 5.5688 7.84514 5.17798 8.85216C4.88186 9.61222 4.53061 10.7547 4.4347 12.8587C4.3316 15.134 4.30882 15.8174 4.30882 21.5789C4.30882 27.3405 4.3316 28.0238 4.4347 30.2992C4.53061 32.4031 4.88186 33.5457 5.17798 34.3058C5.52368 35.2431 6.07508 36.091 6.7916 36.7874C7.48781 37.5038 8.33581 38.0553 9.27318 38.4009C10.0332 38.6971 11.1757 39.0483 13.2797 39.1442C15.5551 39.2474 16.2372 39.2702 22 39.2702C27.7627 39.2702 28.4448 39.2474 30.7202 39.1442C32.8242 39.0483 33.9667 38.6971 34.7268 38.4009C35.7338 38.0101 36.4532 37.5427 37.2084 36.7874C37.9248 36.0912 38.4763 35.2431 38.8219 34.3058C39.1182 33.5457 39.4693 32.4031 39.5652 30.2992C39.6684 28.0238 39.6912 27.3405 39.6912 21.5789C39.6912 15.8174 39.6684 15.134 39.5652 12.8587C39.4693 10.7547 39.1182 9.61222 38.8219 8.85216C38.4312 7.84514 37.9637 7.12584 37.2084 6.37058C36.4532 5.61653 35.7338 5.14778 34.7268 4.75696C33.9667 4.46084 32.8242 4.10959 30.7202 4.01368ZM19.2447 28.231C20.1183 28.5929 21.0544 28.7791 22 28.7791C23.9097 28.7791 25.741 28.0205 27.0912 26.6702C28.4417 25.32 29.2003 23.4885 29.2003 21.5789C29.2003 19.6694 28.4417 17.8379 27.0912 16.4876C25.741 15.1374 23.9097 14.3788 22 14.3788C21.0544 14.3788 20.1183 14.565 19.2447 14.9268C18.371 15.2887 17.5773 15.819 16.9087 16.4876C16.2401 17.1562 15.7098 17.95 15.3479 18.8235C14.9861 19.6971 14.7999 20.6334 14.7999 21.5789C14.7999 22.5245 14.9861 23.4608 15.3479 24.3344C15.7098 25.2079 16.2401 26.0016 16.9087 26.6702C17.5773 27.3388 18.371 27.8692 19.2447 28.231ZM14.1571 13.736C16.2372 11.6559 19.0584 10.4873 22 10.4873C24.9418 10.4873 27.7629 11.6559 29.8429 13.736C31.9229 15.8161 33.0915 18.6373 33.0915 21.5789C33.0915 24.5205 31.9229 27.3417 29.8429 29.4219C27.7629 31.5019 24.9418 32.6705 22 32.6705C19.0584 32.6705 16.2372 31.5019 14.1571 29.4219C12.077 27.3417 10.9084 24.5205 10.9084 21.5789C10.9084 18.6373 12.077 15.8161 14.1571 13.736ZM35.551 12.1399C36.0426 11.6482 36.3188 10.9813 36.3188 10.286C36.3188 9.59059 36.0426 8.92372 35.551 8.43203C35.0592 7.94035 34.3924 7.66412 33.6969 7.66412C33.0017 7.66412 32.3347 7.94035 31.8431 8.43203C31.3513 8.92372 31.0751 9.59059 31.0751 10.286C31.0751 10.9813 31.3513 11.6482 31.8431 12.1399C32.3347 12.6316 33.0017 12.9078 33.6969 12.9078C34.3924 12.9078 35.0592 12.6316 35.551 12.1399Z" fill="#7A7A7A"/>
          </svg>
        </div>
        <div className='socialMediaLinksStructure__github'>
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M39.3759 0H5.46616C2.9133 0 0.842102 2.07119 0.842102 4.62406V38.5338C0.842102 41.0867 2.9133 43.1579 5.46616 43.1579H39.3759C41.9288 43.1579 44 41.0867 44 38.5338V4.62406C44 2.07119 41.9288 0 39.3759 0ZM27.5557 36.9636C26.7465 37.1081 26.4478 36.6071 26.4478 36.1929C26.4478 35.6727 26.4671 33.0139 26.4671 30.8656C26.4671 29.3628 25.9662 28.4091 25.3785 27.9081C28.9429 27.5132 32.6999 27.0219 32.6999 20.8661C32.6999 19.1128 32.0738 18.2361 31.0526 17.109C31.2164 16.6948 31.7655 14.9897 30.8889 12.774C29.5498 12.3597 26.4864 14.4984 26.4864 14.4984C25.2148 14.1419 23.8372 13.9589 22.4788 13.9589C21.1205 13.9589 19.7429 14.1419 18.4713 14.4984C18.4713 14.4984 15.4079 12.3597 14.0688 12.774C13.1922 14.98 13.7317 16.6852 13.9051 17.109C12.8839 18.2361 12.4023 19.1128 12.4023 20.8661C12.4023 26.993 15.9955 27.5132 19.5599 27.9081C19.0975 28.3224 18.6833 29.0352 18.5388 30.0564C17.6236 30.4706 15.2827 31.1835 13.8858 28.7173C13.0092 27.1953 11.4293 27.07 11.4293 27.07C9.86865 27.0508 11.3233 28.0526 11.3233 28.0526C12.3637 28.5343 13.0959 30.3839 13.0959 30.3839C14.0303 33.2451 18.5002 32.2817 18.5002 32.2817C18.5002 33.6208 18.5195 35.7979 18.5195 36.1929C18.5195 36.6071 18.2305 37.1081 17.4116 36.9636C11.0536 34.8346 6.60291 28.7848 6.60291 21.7138C6.60291 12.8703 13.3656 6.15578 22.2091 6.15578C31.0526 6.15578 38.2199 12.8703 38.2199 21.7138C38.2296 28.7848 33.9138 34.8442 27.5557 36.9636ZM18.1053 31.0775C17.9222 31.1161 17.7488 31.039 17.7296 30.9138C17.7103 30.7693 17.8355 30.644 18.0186 30.6055C18.2016 30.5862 18.375 30.6633 18.3943 30.7885C18.4232 30.9138 18.2979 31.039 18.1053 31.0775ZM17.1901 30.9908C17.1901 31.1161 17.0456 31.222 16.8529 31.222C16.641 31.2413 16.4965 31.1353 16.4965 30.9908C16.4965 30.8656 16.641 30.7596 16.8336 30.7596C17.0167 30.7404 17.1901 30.8463 17.1901 30.9908ZM15.8703 30.8849C15.8318 31.0101 15.6391 31.0679 15.4753 31.0101C15.2923 30.9716 15.1671 30.8271 15.2056 30.7018C15.2441 30.5766 15.4368 30.5188 15.6006 30.5573C15.7932 30.6151 15.9185 30.7596 15.8703 30.8849ZM14.6854 30.3647C14.5987 30.4706 14.4156 30.4514 14.2711 30.3069C14.1266 30.1816 14.0881 29.9986 14.1844 29.9119C14.2711 29.8059 14.4542 29.8252 14.5987 29.9697C14.7239 30.0949 14.7721 30.2876 14.6854 30.3647ZM13.8087 29.488C13.722 29.5458 13.5583 29.488 13.4523 29.3435C13.3463 29.199 13.3463 29.0352 13.4523 28.9678C13.5583 28.8811 13.722 28.9485 13.8087 29.093C13.9147 29.2375 13.9147 29.4109 13.8087 29.488ZM13.1826 28.5536C13.0959 28.6403 12.9514 28.5921 12.8454 28.4958C12.7394 28.3705 12.7202 28.226 12.8069 28.1586C12.8936 28.0719 13.0381 28.1201 13.144 28.2164C13.25 28.3416 13.2693 28.4861 13.1826 28.5536ZM12.5371 27.8407C12.4986 27.9274 12.3734 27.9467 12.2674 27.8792C12.1421 27.8214 12.0843 27.7155 12.1229 27.6288C12.1614 27.571 12.2674 27.5421 12.3926 27.5902C12.5179 27.6577 12.5757 27.7636 12.5371 27.8407Z" fill="#7A7A7A"/>
          </svg>
        </div>
      </div>
    </>
  )
}

SocialMediaLinks.propTypes = {
  links: PropTypes.array
};