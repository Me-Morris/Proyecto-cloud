"use client"

import React, { useState } from 'react';

function SearchContact({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="flex justify-center my-4">
      <form onSubmit={handleSearch} className="flex space-x-2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar contacto"
          className="border border-gray-400 rounded p-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Buscar
        </button>
      </form>
    </div>
  );
}

export default SearchContact;
