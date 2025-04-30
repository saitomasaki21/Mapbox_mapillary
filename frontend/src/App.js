import React, { useState } from 'react';
import MapboxMap from './components/MapboxMap';
import MapillaryViewer from './components/MapillaryViewer';
import InputField from './components/InputField';
import './styles.css';

function App() {
    const [imageIds, setImageIds] = useState([]);
    const [selectedCoordinates, setSelectedCoordinates] = useState(null);
    const [trails, setTrails] = useState([]);

    const handleImageLoad = (ids) => {
        setImageIds(ids);

        // Simulate fetching trails for each ID (replace with real API calls)
        const dummyTrails = ids.map((id) => [
            [-122.42, 37.78], // Example coordinates for trail
            [-122.43, 37.77], // Example coordinates for trail
        ]);
        setTrails(dummyTrails);
    };

    const handleImageSelect = (coordinates) => {
        setSelectedCoordinates(coordinates);
    };

    return (
        <div className="app-container">
            <InputField onLoad={handleImageLoad} />
            <div className="map-container">
                <MapboxMap selectedCoordinates={selectedCoordinates} trails={trails} />
                <MapillaryViewer imageIds={imageIds} onImageSelect={handleImageSelect} />
            </div>
        </div>
    );
}

export default App;