import React, { useState } from 'react';

function InputField({ onLoad }) {
    const [input, setInput] = useState('');

    const handleLoadClick = () => {
        const ids = input.split(',').map((id) => id.trim());
        onLoad(ids);
    };

    return (
        <div className="input-field">
            <input 
                type="text" 
                placeholder="Enter Mapillary image IDs (comma-separated)" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
            />
            <button onClick={handleLoadClick}>Load</button>
        </div>
    );
}

export default InputField;