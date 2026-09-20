import './Content.scss'
import classNames from 'classnames'

const Content = (props) => {
  const {
    children,
    isResetPaddingTop = false,
  } = props

  return (
    <main
      className={classNames('content', {
        'content--reset-padding-top': isResetPaddingTop,
      })}
    >
      {children}
    </main>
  )
}

export default Content
