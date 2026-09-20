import './Checkbox.scss'
import getIdFromTitle from '@/utils/getIdFromTitle'
import classNames from 'classnames'

const Checkbox = (props) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    isRequired,
  } = props

  return (
    <label
      className={classNames(className, 'checkbox')}
      htmlFor={id}
    >
      <input
        className="checkbox__input"
        id={id}
        type="checkbox"
        required={isRequired}
      />
      <span className="checkbox__label">
        {label}
      </span>
    </label>
  )
}

export default Checkbox
