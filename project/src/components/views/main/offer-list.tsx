import OfferCard from '../../common/offer-card';
import { CardType } from '../../../const';
import { Offer } from '../../../types/hotel';

type OfferListProps = {
  onMouseOver: (offerCard: Offer) => () => void;
  offers: Offer[];
};

function OfferList ({ onMouseOver, offers }: OfferListProps):JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          cardType={CardType.Cities}
          offer={offer}
          onMouseOver={onMouseOver(offer)}
        />
      ))}
    </div>
  );
}

export default OfferList;
