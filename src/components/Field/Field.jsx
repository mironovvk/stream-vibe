import './Field.scss'
import getIdFromTitle from '@/utils/getIdFromTitle'
import classNames from 'classnames'

const Field = (props) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    /**
     * undefined (default) | 'email' | 'textarea'
     */
    type,
    placeholder,
    isRequired,
    inputMode,
    mask,
    renderBefore,
  } = props

  const Component = type === 'textarea'
    ? 'textarea'
    : 'input'
  const fieldControlClassName = 'field__control'

  const extraAttrs = {}

  if (mask) {
    extraAttrs['data-js-input-mask'] = mask
  }

  return (
    <div
      className={classNames(className, 'field')}
    >
      <label
        className="field__label"
        htmlFor={id}
      >
        {label} {isRequired && (
          <span
            className="field__required-star"
            aria-hidden="true"
          >*</span>
        )}
      </label>
      <div className="field__body">
        {renderBefore?.(fieldControlClassName)}
        <Component
          className={fieldControlClassName}
          id={id}
          type={type}
          placeholder={placeholder}
          required={isRequired}
          inputMode={inputMode}
          {...extraAttrs}
        />
      </div>
    </div>
  )
}

export default Field
