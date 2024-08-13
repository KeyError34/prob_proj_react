import Header from "../../components/header/index";
import styles from "./styles.module.css"
import Main from "../../components/main/index";
import Footer from "../../components/footer/index";
function Home() {
  return <div className={styles.homeContainer}>
  <Header/>
  <Main/>
 <Footer/>
  </div>
}
export default Home;
