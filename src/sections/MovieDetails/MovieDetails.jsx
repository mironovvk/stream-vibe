import './MovieDetails.scss'
import getBaseUrl from '@/utils/getBaseUrl'
import SliderNavigation from '@/components/Slider/components/SliderNavigation'
import Slider from '@/components/Slider'
import PersonCard from '@/components/PersonCard'
import Button from '@/components/Button'
import ReviewCard from '@/components/ReviewCard'
import Icon from '@/components/Icon'
import Tags from '@/components/Tags'
import Ratings from '@/components/Ratings'
import castImageSrc_1 from '@/assets/images/people/cast1.jpg'
import castImageSrc_2 from '@/assets/images/people/cast2.jpg'
import castImageSrc_3 from '@/assets/images/people/cast3.jpg'
import castImageSrc_4 from '@/assets/images/people/cast4.jpg'
import castImageSrc_5 from '@/assets/images/people/cast5.jpg'
import castImageSrc_6 from '@/assets/images/people/cast6.jpg'
import castImageSrc_7 from '@/assets/images/people/cast7.jpg'
import castImageSrc_8 from '@/assets/images/people/cast8.jpg'

const MovieDetails = (props) => {
  const { seasons } = props
  const titleId = "movie-details-title"
  const castSliderNavigationId = "movie-cast-slider-navigation"

  const castItems = [{
    imgSrc: castImageSrc_1, imgAlt: "Ivan Ivanov"
  }, {
    imgSrc: castImageSrc_2, imgAlt: "Ivan Ivanov"
  }, {
    imgSrc: castImageSrc_3, imgAlt: "Ivan Ivanov"
  }, {
    imgSrc: castImageSrc_4, imgAlt: "Ivan Ivanov"
  }, {
    imgSrc: castImageSrc_5, imgAlt: "Ivan Ivanov"
  }, {
    imgSrc: castImageSrc_6, imgAlt: "Ivan Ivanov"
  }, {
    imgSrc: castImageSrc_7, imgAlt: "Ivan Ivanov"
  }, {
    imgSrc: castImageSrc_8, imgAlt: "Ivan Ivanov"
  }, {imgSrc: castImageSrc_1, imgAlt: "Ivan Ivanov"},]

  const reviewItems = [
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    }, {
      name: "Aniket Roy",
      subtitle: "From India",
      description: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    }, {
      name: "Aniket Roy",
      subtitle: "From India",
      description: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    }, {
      name: "Aniket Roy",
      subtitle: "From India",
      description: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    }, {
      name: "Aniket Roy",
      subtitle: "From India",
      description: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    }, {
      name: "Aniket Roy",
      subtitle: "From India",
      description: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    }, {
      name: "Aniket Roy",
      subtitle: "From India",
      description: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    }, {
      name: "Aniket Roy",
      subtitle: "From India",
      description: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    },]

  return (<section
    className={"movie-details container"}
    aria-labelledby={titleId}
  >
    <h2 className='visually-hidden' id={titleId} >
      Detailed movie information
    </h2>
    <div className="movie-details__main">
      {seasons && (
        <div className="movie-details__panel movie-details__panel--seasons">
          <div className="movie-details__group movie-details__group--big-gap-y">
            <h3 className="h4">Seasons and Episodes</h3>
            {seasons}
          </div>
        </div>
      )}
      <div className="movie-details__panel movie-details__panel--description">
        <div className="movie-details__group">
          <h3 className="movie-details__title">
            Description
          </h3>
          <div className="movie-details__description">
            <p>A fiery young man clashes with an unflinching forest officer in a south Indian village where
              spirituality, fate and folklore rule the lands.</p>
          </div>
        </div>
      </div>
      <div className="movie-details__panel">
        <header className="movie-details__panel-header">
          <h3 className="movie-details__title">
            Cast
          </h3>
          <SliderNavigation
            id={castSliderNavigationId}
            hasPagination={false}
            mode="rounded"
            buttonMode="black-08"
          />
        </header>
        <Slider
          navigationTargetElementId={castSliderNavigationId}
          hasScrollbarOnMobile={false}
          sliderParams={{
            slidesPerView: "auto",
            spaceBetween: 10,
            breakpoints: {
              1024: {
                slidesPerView: "auto",
                spaceBetween: 20,
                allowTouchMove: false,
              },
            },
          }}
        >
          {castItems.map((castItem, index) => (
            <PersonCard {...castItem} key={index}/>
          ))}
        </Slider>
      </div>
      <div className="movie-details__panel movie-details__panel--large-gap-y">
        <header className="movie-details__panel-header">
          <h3 className="movie-details__title">
            Reviews
          </h3>
          <Button
            mode="black-08"
            iconName="plus"
            label="Add Your Review"
            href={getBaseUrl()}
          />
        </header>
        <Slider
          navigationMode="rounded"
          isNavigationHiddenMobile={false}
          hasScrollbarOnMobile={false}
          sliderParams={{
            slidesPerView: 2,
            slidesPerGroup: 2,
            breakpoints: {
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
                allowTouchMove: false,
              },
            },
          }}
        >
          {reviewItems.map((reviewItem, index) => (
            <ReviewCard {...reviewItem} key={index}/>
          ))}
        </Slider>
      </div>
    </div>
    <aside className="movie-details__info">
      <div className="movie-details__panel">
        <div className="movie-details__groups">
          <div className="movie-details__group">
            <h3 className="movie-details__title">
              <Icon name="calendar"/>
              <span>Released Year</span>
            </h3>
            <div className="movie-details__description">
              <time className="h6" dateTime="2022">2022</time>
            </div>
          </div>
          <div className="movie-details__group">
            <h3 className="movie-details__title">
              <Icon name="translate"/>
              <span>Available Languages</span>
            </h3>
            <Tags
              items={["English", "Hindi", "Tamil", "Telegu", "Kannada"]}
            />
          </div>
          <div className="movie-details__group">
            <h3 className="movie-details__title">
              <Icon name="star"/>
              <span>Ratings</span>
            </h3>
            <Ratings
              items={[{title: "IMDb", ratingValue: 4.5}, {title: "Streamvibe", ratingValue: 4},]}
            />
          </div>
          <div className="movie-details__group">
            <h3 className="movie-details__title">
              <Icon name="genres"/>
              <span>Gernes</span>
            </h3>
            <Tags items={["Action", "Adventure"]}/>
          </div>
          <div className="movie-details__group">
            <h3 className="movie-details__title">Director</h3>
            <PersonCard
              name="Rishab Shetty"
              subtitle="From India"
              imgSrc={castImageSrc_1}
            />
          </div>
          <div className="movie-details__group">
            <h3 className="movie-details__title">Music</h3>
            <PersonCard
              name="B. Ajaneesh Loknath"
              subtitle="From India"
              imgSrc={castImageSrc_2}
            />
          </div>
        </div>
      </div>
    </aside>
  </section>)
}

export default MovieDetails