import React, { useEffect } from 'react';
import { Viewer } from 'mapillary-js';

function MapillaryViewer({ imageIds, onImageSelect }) {
    const viewerRef = React.useRef(null);

    useEffect(() => {
        if (!viewerRef.current) {
            viewerRef.current = new Viewer({
                container: 'mapillary-viewer',
                accessToken: process.env.REACT_APP_MAPILLARY_API_KEY, // Access API Key
            });

            // Event listener for selecting an image (synchronize with Mapbox)
            viewerRef.current.on('nodechanged', (node) => {
                const { lat, lon } = node.latLon;
                onImageSelect([lon, lat]); // Pass coordinates to parent
            });
        }

        if (imageIds.length > 0) {
            // Iterate through the IDs and load their trails
            imageIds.forEach((id) => {
                viewerRef.current.moveTo(id); // Move to each ID's trail
            });
        }
    }, [imageIds, onImageSelect]);

    return <div id="mapillary-viewer" className="mapillary-viewer"></div>;
}

export default MapillaryViewer;