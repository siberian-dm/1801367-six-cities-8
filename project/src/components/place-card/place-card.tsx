type PlaceCardProps = {
  card: {
    isPremium: boolean,
    previewImage: string,
    price: number,
    isFavorite: boolean,
    rating: number,
    title: string,
    type: string,
  },
}


function PlaceCardMark(): JSX.Element {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}


function PlaceCard({card: {isPremium, previewImage, price, isFavorite, rating, title, type}}: PlaceCardProps): JSX.Element {
  return (
    <article className="cities__place-card place-card">
      {isPremium ? PlaceCardMark() : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={isFavorite
            ? 'place-card__bookmark-button place-card__bookmark-button--active button'
            : 'place-card__bookmark-button button'}
          type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}


export default PlaceCard;
