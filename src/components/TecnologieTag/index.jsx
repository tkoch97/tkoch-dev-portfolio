import './style.scss';
import PropTypes from 'prop-types';

export function TecnologieTag(props) {
  
  const {text} = props

  return(
    <>
      <div className="tecnologieTagStructure">
        {text}
      </div>
    </>
  )
}

TecnologieTag.propTypes = {
  text: PropTypes.string
};