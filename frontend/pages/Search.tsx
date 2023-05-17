import React from "react";
import { MDBCol, MDBInput } from "mdbreact";
import styles from "../styles/Layout.module.css";

const SearchPage: React.FC = () => {
  return (
    <MDBCol md="10">
      <MDBInput
  hint="Search"
  type="text"
  containerClass={`${styles.searchInput}`}
/>
    </MDBCol>
  );
}

export default SearchPage;
