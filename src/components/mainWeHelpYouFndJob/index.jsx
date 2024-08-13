import styles from "./styles.module.css";
import mokWeHelpYouFndJobContainer from "../mokWeHelpYouFndJobContainer";
function WeHelpYouFndJob() {
  return (
    <div className={styles.WeHelpYouFndJobContainer}>
      <h3 style={{ fontWeight:"700", fontSize:"20px"}}>Помогаем найти работу:</h3>
      <ul>{mokWeHelpYouFndJobContainer.map((el,ind)=>{
        return (
            <li  key={ind}> <img src={el.url} alt={el.imgName} /></li>
        )
      })}</ul>
    </div>
  );
}
export default WeHelpYouFndJob;
