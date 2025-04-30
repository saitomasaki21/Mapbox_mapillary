import React, { useState } from 'react';
import MapboxMap from './components/MapboxMap';
import MapillaryViewer from './components/MapillaryViewer';
import InputField from './components/InputField';
import './styles.css';

function App() {
    const [imageIds, setImageIds] = useState([]);
    const [selectedCoordinates, setSelectedCoordinates] = useState(null);

    const handleImageLoad = (ids) => {
        setImageIds(ids);
    };

    const handleImageSelect = (coordinates) => {
        setSelectedCoordinates(coordinates);
    };

    return (
        <div className="app-container">
            <InputField onLoad={handleImageLoad} />
            <div className="map-container">
                <MapboxMap selectedCoordinates={selectedCoordinates} />
                <MapillaryViewer imageIds={imageIds} onImageSelect={handleImageSelect} />
            </div>
        </div>
    );
}

export default App;