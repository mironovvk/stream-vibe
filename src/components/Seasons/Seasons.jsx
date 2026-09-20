import './Seasons.scss'
import classNames from 'classnames'
import AccordionGroup from '@/components/AccordionGroup'
import seasonItems from '@/components/Seasons/seasonItems'
import Accordion from '@/components/Accordion'
import EpisodeCard from '@/components/EpisodeCard'

const Seasons = (props) => {
  const {
    className,
  } = props

  return (
    <div
      className={classNames(className, 'seasons')}
    >
      <AccordionGroup
        mode="dark"
        isOrderedList={false}
      >
        {seasonItems.map(({title, subtitle, episodes}, index) => (
          <Accordion
            className="seasons"
            title={title}
            titleLevelClassName="h4"
            subtitle={subtitle}
            id={`season-${index}`}
            name="seasons"
            isOpen={index === 0}
            key={index}
            isArrowButton
          >
            <ul className="season__list">
              {episodes.map((episode, index) => (
                <li className="seasons__item" key={index}>
                  <EpisodeCard {...episode} />
                </li>
              ))}
            </ul>
          </Accordion>
        ))}
      </AccordionGroup>
    </div>
  )
}

export default Seasons