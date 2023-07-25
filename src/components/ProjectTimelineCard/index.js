// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {itemDetails} = props
  const {
    id,
    categoryId,
    title,
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = itemDetails
  return (
    <div>
      <img className="image" src={imageUrl} alt="project" />
      <div className="first">
        <h1>{projectTitle}</h1>
        <div className="second">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p className={title}>{description}</p>
      <a target="blank_" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
