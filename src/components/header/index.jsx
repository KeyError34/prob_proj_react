import Nav from "../nav";
import styles from "./styles.module.css";

import { useState } from "react";
import SearchBar from "../searchBar";
function Header() {
  const [position, setPosition] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (position, location) => {
    //любая логика в будущем
    console.log('Должность:', position);
    console.log('Город/страна:', location);
    setPosition("")
    setLocation("")
  };
  return (
    <div className={styles.headerContainer}>
      <Nav />
      <div className={styles.mainContainerHeader}>
        <h1 style={{ fontSize: "64px", fontWeight: "700" ,width:"100%"}}>
          {" "}
          One click <br />
          and work in your pocket{" "}
        </h1>
        <SearchBar onSearch={handleSearch} position={position} setPosition={setPosition} location={location} setLocation={setLocation} />
       
      
      
      </div>
    </div>
  );
}
export default Header;
