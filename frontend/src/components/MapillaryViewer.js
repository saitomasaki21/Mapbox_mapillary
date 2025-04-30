import React, { useEffect } from 'react';
import { Viewer } from 'mapillary-js';

function MapillaryViewer({ imageIds, onImageSelect }) {
    const viewerRef = React.useRef(null);

    useEffect(() => {
        if (!viewerRef.current) {
            viewerRef.current = new Viewer({
                container: 'mapillary-viewer',
                accessToken: process.env.REACT_APP_MAPILLARY_API_KEY,
            });

            viewerRef.current.on('nodechanged', (node) => {
                const { lat, lon } = node.latLon;
                onImageSelect([lon, lat]);
            });
        }

        if (imageIds.length > 0) {
            viewerRef.current.moveTo(imageIds[0]);
        }
    }, [imageIds, onImageSelect]);

    return <div id="mapillary-viewer" className="mapillary-viewer"></div>;
}

export default MapillaryViewer;