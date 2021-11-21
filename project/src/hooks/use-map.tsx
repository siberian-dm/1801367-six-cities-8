import { City } from '../types/app-data';
import { LayerGroup, Map, TileLayer } from 'leaflet';
import { MutableRefObject, useEffect, useState } from 'react';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, cityLocation: City): [Map | null, LayerGroup | null] {
  const [map, setMap] = useState<Map | null>(null);
  const [offersLayerGroup, setOffersLayerGroup] = useState<LayerGroup | null>(null);
  const { location } = cityLocation;

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );
      const layerGroup = new LayerGroup();

      instance.addLayer(layer);
      instance.addLayer(layerGroup);

      setOffersLayerGroup(layerGroup);

      setMap(instance);
    }
    else {
      map?.setView(
        {
          lat: location.latitude,
          lng: location.longitude,
        },
        location.zoom,
      );
    }

    return () => {
      offersLayerGroup?.clearLayers();
    };
  }, [mapRef, map, offersLayerGroup, location]);

  return [map, offersLayerGroup];
}

export default useMap;
