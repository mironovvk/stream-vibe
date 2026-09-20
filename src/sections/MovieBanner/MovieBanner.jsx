import MovieBannerCard from '@/components/MovieBannerCard'
import movieBannerImageSrc from '@/assets/images/movie-banner/2.jpg'

const MovieBanner = (props) => {
  const {
    className,
  } = props

  const titleId = 'movie-banner-title'

  return (
    <section
      className='container'
      aria-labelledby={titleId}
    >
      <MovieBannerCard
        title='Kantara'
        titleId={titleId}
        TitleTag='h1'
        description='A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.'
        imgSrc={movieBannerImageSrc}
        isSmallPaddingY
      />
    </section>
  )
}

export default MovieBanner