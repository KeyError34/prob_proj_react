import styles from "./styles.module.css";
import mockLinksLocation from "../mockLinksLocation";
import LinksLocation from "../linksLocation";
import mockSotialLincs from "../mockSotialLincs";
import SotialLincs from "../sotialLincs/index";
import logo from "../../assets/icons/footer/logo_cooljob.svg";
function Footer() {
  return (
    <div className={styles.foterContainer}>
      <div>
        <h3>Popular cities</h3>
        <div className={styles.linksLocation}>
          <LinksLocation mockLinksLocation={mockLinksLocation} />
        </div>
      </div>
      <div className={styles.sotialLincsContainer}>
        <img src={logo} alt="logo" />
        <SotialLincs mockSotialLincs={mockSotialLincs} />
      </div>
    </div>
  );
}
export default Footer;
