import './style.scss';
import { Button } from '../Button';
import PropTypes from 'prop-types';
import { TecnologieTag } from '../TecnologieTag'


export function ProjectCard(props) {

  const {data} = props;
  console.log(data)

  return(
    <>
      <div className="projectCardStructure">

        <h2 className="projectCardStructure__title">
          {data.title}
        </h2>

        <img className='projectCardStructure__image' src={data.image} alt={`layout do ${data.title}`} />

        <p className="projectCardStructure__description">
          {data.description}
        </p>

        <div className="projectCardStructure__tecnologies">
          {data.tecnologies.map(tecnologie => (
            <TecnologieTag className='tecnologieTagStructure' key={tecnologie.index} text={tecnologie}/>
          ))}
        </div>
        
        <div className="projectCardStructure__buttons">
          <Button className="buttonStructure--transparent" title="Repositório" externalLink={data.repository}/>
          <Button className="buttonStructure--transparent" title="Deploy" externalLink={data.deploy}/>
        </div>
      </div>
    </>
  )
}

ProjectCard.propTypes = {
  data: PropTypes.object
};