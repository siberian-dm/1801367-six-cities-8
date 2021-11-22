import Loading from '../../common/loading/loading';
import { formatString } from '../../../utils';
import { getActiveCity, getIsDataLoaded } from '../../../store/reducers/app-data/selectors';
import { StringFormat } from '../../../const';
import { useSelector } from 'react-redux';


function NoOffers(): JSX.Element {
  const isDataLoaded = useSelector(getIsDataLoaded);
  const activeCity = useSelector(getActiveCity);

  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        {isDataLoaded
          ?
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">
                We could not find any property available at the moment in {formatString(activeCity, StringFormat.Capitalize)}
            </p>
          </div>
          : <Loading/>}
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
}

export default NoOffers;
