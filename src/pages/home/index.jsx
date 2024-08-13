import Header from "../../components/header";
import styles from "./styles.module.css"
import Main from "../../components/main";
function Home() {
  return <div className={styles.homeContainer}>
  <Header/>
  <Main/>
  </div>
}
export default Home;
