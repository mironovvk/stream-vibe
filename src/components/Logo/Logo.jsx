import './Logo.scss'
import classNames from 'classnames'
import logoImgSrc from '@/assets/images/logo.svg'
import getBaseUrl from '@/utils/getBaseUrl'

const Logo = (props) => {
  const {
    className,
    loading = 'lazy',
  } = props

  const title = 'Home'

  return (
    <a
      className={classNames(className, 'logo')}
      href={getBaseUrl()}
      title={title}
      aria-label={title}
    >
      <img
        className="logo__image"
        src={logoImgSrc}
        alt=""
        width={199}
        height={60}
        loading={loading}
      />

    </a>
  )
}

export default Logo
