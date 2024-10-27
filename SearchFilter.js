import React, { useState } from 'react';

const SearchFilter = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Sample data to filter
    const names = [
        'Alice',
        'Bob',
        'Charlie',
        'David',
        'Eva',
        'Frank',
        'Grace',
        'Hannah'
    ];

    // Function to handle input change
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter names based on search term
    const filteredNames = names.filter(name =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search names..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <ul>
                {filteredNames.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchFilter;
