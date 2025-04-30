import React, { useState } from 'react';

function InputField({ onLoad }) {
    // Pre-fill the input field with the provided image IDs
    const [input, setInput] = useState("592662526477124,322931466291740");

    const handleLoadClick = () => {
        // Split comma-separated IDs and trim whitespace
        const ids = input.split(',').map((id) => id.trim());
        onLoad(ids); // Pass the IDs to parent component
    };

    return (
        <div className="input-field">
            <input 
                type="text" 
                placeholder="Enter Mapillary image IDs (comma-separated)" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
            />
            <button onClick={handleLoadClick}>Load Trails</button>
        </div>
    );
}

export default InputField;