import './style.scss'
import PropTypes from 'prop-types';

export function Button(props) {
  const {title, icon: Icon, link, ...rest} = props;

  const handleClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return(
    <>
      <button
        className="buttonStructure" 
        onClick={handleClick}
        {...rest}
      >
        {title}
        {Icon && <Icon/>}
      </button>
    </>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  icon: PropTypes.any,
};