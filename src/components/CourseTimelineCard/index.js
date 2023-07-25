// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import TagsList from '../TagsList'
import './index.css'

const CourseTimelineCard = props => {
  const {itemDetails} = props
  const {title, courseTitle, description, duration, tagsList} = itemDetails
  return (
    <div>
      <div className="first">
        <h1>{courseTitle}</h1>
        <div className="second">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p className={title}>{description}</p>
      <div className="buttons">
        {tagsList.map(i => (
          <TagsList key={i.id} itemDetails={i} />
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
