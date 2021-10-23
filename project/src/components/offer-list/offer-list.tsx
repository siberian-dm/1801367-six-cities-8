import OfferCard from '../offer-card/offer-card';
import { CardType } from '../../const';
import { Offer, Offers } from '../../types/hotel';
import { useState } from 'react';

function OfferList ({ offers }: Offers):JSX.Element {
  const [, setActiveOfferCard] = useState({});

  const handleOfferCardHover = (offerCard: Offer) =>
    (): void => {
      setActiveOfferCard(offerCard);
    };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          cardType={CardType.CityPlace}
          offer={offer}
          onMouseOver={handleOfferCardHover(offer)}
        />
      ))}
    </div>
  );
}

export default OfferList;
