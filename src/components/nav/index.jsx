import styles from "./styles.module.css"
import cooljobLogo from "../../assets/icons/header/logo.svg"
function Nav() {
    return <div className={styles.navContainer}>
      <img src={cooljobLogo} alt="cooljob_logo" className={styles.logoImg}/>
      <div className={styles.navMenu}>
        <div>
          <a href="">Job search</a>
          <a href="">Startup search</a>
        </div>
        <div>
        <a href="">Registration</a>
        <button className={styles.loginBtn}>Login</button>
        </div>
      </div>
    </div>;
  }
  export default Nav;
  