import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

function MapboxMap({ selectedCoordinates, trails }) {
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

    useEffect(() => {
        if (trails && map.current) {
            // Remove existing trails layer if it exists
            if (map.current.getSource('trails')) {
                map.current.removeLayer('trails');
                map.current.removeSource('trails');
            }

            // Add new trails layer
            map.current.addSource('trails', {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: trails.map((trail) => ({
                        type: 'Feature',
                        geometry: {
                            type: 'LineString',
                            coordinates: trail, // Coordinates of the trail
                        },
                        properties: {},
                    })),
                },
            });

            map.current.addLayer({
                id: 'trails',
                type: 'line',
                source: 'trails',
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round',
                },
                paint: {
                    'line-color': '#ff5733',
                    'line-width': 4,
                },
            });
        }
    }, [trails]);

    return <div ref={mapContainer} className="mapbox-map"></div>;
}

export default MapboxMap;