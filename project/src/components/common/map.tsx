import useMap from '../../hooks/useMap';
import { City, Offer } from '../../types/hotel';
import { Icon, Marker } from 'leaflet';
import { MapType } from '../../const';
import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

const URL_MARKER_DEFAULT = 'img/pin.svg';
const URL_MARKER_CURRENT = 'img/pin-active.svg';

const MOCK_CITY = {
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10,
  },
  name: 'Amsterdam',
};

const mapStyle = {
  [MapType.CitiesMap]: {},
  [MapType.PropertyMap]: {
    width: '1144px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

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
  city?: City;
  points: Offer[];
  selectedPoint: Offer | undefined;
};

function Map({ mapType, city = MOCK_CITY, points, selectedPoint }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
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
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <section
      className={`${mapType} map`}
      style={mapStyle[mapType]}
      ref={mapRef}
    />
  );
}

export default Map;
