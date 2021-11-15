import Loading from '../../common/loading/loading';
import { CityName, StringFormat } from '../../../const';
import { formatString } from '../../../utils';
import { getDataLoadingStatus } from '../../../store/reducers/app-data/selectors';
import { useSelector } from 'react-redux';

type NoOffersProps = {
  city: CityName;
}

function NoOffers({ city }: NoOffersProps): JSX.Element {
  const isDataLoading = useSelector(getDataLoadingStatus);

  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        {isDataLoading
          ? <Loading/>
          :
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">
                We could not find any property available at the moment in {formatString(city, StringFormat.Capitalize)}
            </p>
          </div>}
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
}

export default NoOffers;
