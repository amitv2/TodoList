import  { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Here you would typically make an API call to retrieve search results based on the searchTerm
    // For demonstration purposes, let's just assume an array of sample results
    const sampleResults = [
      { id: 1, name: 'Table Salt', description: 'Basic salt used in cooking' },
      { id: 2, name: 'Sea Salt', description: 'Salt obtained by evaporating sea water' },
      { id: 3, name: 'Himalayan Salt', description: 'Pink salt mined in the Himalayan region' }
      // Add more sample results as needed
    ];

    // Filter sample results based on searchTerm (case insensitive)
    const filteredResults = sampleResults.filter(result =>
      result.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search for salt..." 
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        <h2>Search Results:</h2>
        <ul>
          {searchResults.map(result => (
            <li key={result.id}>
              <strong>{result.name}</strong> - {result.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;