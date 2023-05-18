// import React, { useState } from 'react';
// import axios from 'axios';

// const SearchBar: React.FC = () => {
//   const [query, setQuery] = useState('');

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get('/search', { params: { query } });
//       const results = response.data;
//       // Process and display search results
//     } catch (error) {
//       console.error('Error performing search:', error);
//     }
//   };

//   return (
//     <div>
//       <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchBare
import React from "react";
import { MDBInput, MDBCol } from "mdbreact";

const SearchPage = () => {
  return (
    <MDBCol md="6">
      <MDBInput hint="Search" type="text" containerClass="mt-0" />
    </MDBCol>
  );
}

export default SearchPage;
