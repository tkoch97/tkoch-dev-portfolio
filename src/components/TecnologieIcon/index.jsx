import PropTypes from 'prop-types';
import './style.scss';

export function TecnologieIcon(props) {

  const {data} = props;

  return(

    <>
    
    <div className="tecnologieIconStructure">

      <div className="tecnologieIconStructure__ring" dangerouslySetInnerHTML={{__html: data.icon}}/>

      <p className="tecnologieIconStructure__name">
        {data.name}
      </p>

    </div>
    </>
  )
}

TecnologieIcon.propTypes = {
  data: PropTypes.object,
  icon: PropTypes.string,
  name: PropTypes.string
};