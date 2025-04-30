import React, { useState } from 'react';

function InputField({ onLoad }) {
    const [input, setInput] = useState('');

    const handleLoadClick = () => {
        // Split comma-separated IDs and trim whitespace
        const ids = input.split(',').map((id) => id.trim());
        onLoad(ids); // Pass the IDs to the parent component
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