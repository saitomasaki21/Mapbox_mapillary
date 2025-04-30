import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

function MapboxMap({ selectedCoordinates }) {
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (!map.current) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [0, 0],
                zoom: 2,
            });
        }
    }, []);

    useEffect(() => {
        if (selectedCoordinates && map.current) {
            map.current.flyTo({
                center: selectedCoordinates,
                zoom: 15,
            });
        }
    }, [selectedCoordinates]);

    return <div ref={mapContainer} className="mapbox-map"></div>;
}

export default MapboxMap;