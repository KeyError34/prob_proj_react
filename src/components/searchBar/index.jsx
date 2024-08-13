import styles from "./styles.module.css"
import ExsBtn from "../button/exsBtn";
function SearchBar({onSearch,position,setPosition,location,setLocation}){

    function handleSearch () {
        onSearch(position, location); 
      };
      return (
        <div className={styles.searchBarContainer}>
          <input
            type="text"
            placeholder="       Position                                                           |"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <input
            type="text"
            placeholder="            City. Country"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <ExsBtn onHendle={handleSearch}  text={"Search"} fontSize={"22px"} fontWeight={"800"} color={" rgba(255, 255, 255, 1)" } bgColor={"rgba(39, 64, 89, 1)" } width={"213px"} height={"105px"}/>
        </div>
      );
}
export default SearchBar;