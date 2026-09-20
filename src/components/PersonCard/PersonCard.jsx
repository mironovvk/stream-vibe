import './PersonCard.scss'
import classNames from 'classnames'

const PersonCard = (props) => {
  const {
    className,
    imgSrc,
    imgAlt,
    name,
    subtitle,
  } = props

  const hasBody = Boolean(name || subtitle)

  return (
    <div
      className={classNames(className, 'person-card')}
    >
      <img
        className='person-card__image'
        src={imgSrc}
        alt={imgAlt}
        title={imgAlt}
      />
      {hasBody && (
        <div className="person-card__body">
          {name && (<h4 className="person-card__name">{name}</h4>)}
          {subtitle && (<p className="person-card__subtitle">{subtitle}</p>)}
        </div>
      )}
    </div>
  )
}

export default PersonCard