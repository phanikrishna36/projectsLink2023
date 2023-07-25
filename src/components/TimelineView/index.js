import {Chrono} from 'react-chrono'
import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div>
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
        {timelineItemsList.map(i =>
          i.categoryId === 'COURSE' ? (
            <CourseTimeLineCard key={i.title} itemDetails={i} />
          ) : (
            <ProjectTimelineCard key={i.title} itemDetails={i} />
          ),
        )}
      </Chrono>
    </div>
  )
}
export default TimelineView
