import './Tags.scss'
import classNames from 'classnames'

const Tags = (props) => {
  const {
    className,
    items = [],
  } = props

  return (
    <div className={classNames(className, 'tags')}>
      <ul className="tags__list">
        {items.map((tag, index) => (
          <li className="tags__item" key={index}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tags