import './Specifications.scss'
import classNames from 'classnames'

const Specifications = (props) => {
  const {
    items,
  } = props

  return (
    <div className="specifications">
      <ol className="specifications__list">
        {items.map(({key, value, inWide}, index) => (
          <div
            className={classNames('specifications__item', {
              'specifications__item--wide': inWide,
            })}
            key={index}
          >
            <dt className="specifications__key">{key}</dt>
            <dd className="specifications__value">{value}</dd>
          </div>
        ))}
      </ol>
    </div>
  )
}

export default Specifications