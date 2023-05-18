
import React, { useState, useEffect, ChangeEvent } from "react";
import React from "react";
import { MDBCol, MDBInput ,Input} from "mdbreact";
import styles from "../styles/Layout.module.css";
import axios from "axios";

interface Product {
  id: number;
  clothesName: string;
}

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get<Product[]>(`http://localhost:4000/users/search?q=${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching users:", error);
      
    }
  };

  useEffect(() => {
    
    handleSearch();
  }, [searchTerm]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <MDBCol md="10">
      <Input
        hint="SEARCH FOR AN ITEM"
        type="text"
        containerClass={`${styles.searchInput}`}
        value={searchTerm}
        onChange={handleChange}
      />

      <div>
        {/* Display search results */}
        <ul>
          {searchResults.map((product) => (
            <li key={product.id}>{product.clothesName}</li>
          ))}
        </ul>
      </div>
    </MDBCol>
  );
};

export default SearchPage;
