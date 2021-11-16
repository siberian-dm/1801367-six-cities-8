import classNames from 'classnames';
import styles from './map.module.css';
import useMap from '../../../hooks/use-map';
import { City, Offer } from '../../../types/hotel';
import { Icon, Marker } from 'leaflet';
import { MapType } from '../../../const';
import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

const URL_MARKER_DEFAULT = 'img/pin.svg';
const URL_MARKER_CURRENT = 'img/pin-active.svg';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type MapProps = {
  mapType: MapType;
  cityLocation: City;
  points: Offer[];
  selectedPoint: Offer | undefined;
};

function Map({ mapType, cityLocation, points, selectedPoint }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const [map, offersLayerGroup] = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map !== null && offersLayerGroup !== null) {
      points.forEach(({ location, id }) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(offersLayerGroup);
      });
    }

  }, [map, points, cityLocation, selectedPoint, offersLayerGroup]);

  return (
    <section
      className={classNames(
        'map',
        {
          'cities__map': mapType === MapType.CitiesMap,
          [`${styles.map} property__map`]: mapType === MapType.PropertyMap,
        },
      )}
      ref={mapRef}
    />
  );
}

export default Map;
