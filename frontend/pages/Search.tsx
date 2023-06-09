import { MDBCol, MDBInput } from "mdbreact";
import React, { useState, useEffect, ChangeEvent } from "react";
import styles from "../styles/Layout.module.css";
import axios from "axios";
import ClothesDetail from "./ClothesDetail";



interface ClothingItem {
  id: number;
  clothesName: string;
  image: string;
  category: string;
  cart_id: number;
}

const SearchPage: React.FC = () => {
  const [data, setData] = useState<ClothingItem[]>([]);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.trim();

    setSearchText(query);

    if (query === "") {
      setData([]);
      return;
    }

    axios
      .get<{ products: ClothingItem[] }>(`http://${process.env.HOST}:${process.env.PORT}/search/${query}`)
      .then((response) => {
        console.log(response);
        setData(response.data.products);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
    <MDBCol md="11">
        <MDBInput
          hint="Search"
          type="text"
          containerClass={`${styles.searchInput}`}
          value={searchText}
          onChange={handleSearch}
        />
      </MDBCol>
    <div
      style={{
        marginTop: "10px",
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {data.map((el) => (
        <ClothesDetail el={el} key={el.id} />
      ))}  
      </div>
    </div>
  );
};

export default SearchPage;