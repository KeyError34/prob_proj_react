import styles from "./styles.module.css";
import CategoryCard from "../categoryCard/index";
import categoties from "../mokCategoties/index";
import WeHelpYouFndJob from "../mainWeHelpYouFndJob/index";
import mokNewVacancies from "../mokNewVacancies/index";
import VacanciesCard from "../newVacanciesCard/index";
import ExsBtn from "../button/exsBtn";
function Main() {
  return (
    <div className={styles.mainContainer}>
      <WeHelpYouFndJob />
      <h3>
        {" "}
        Job <br /> by category
      </h3>
      <ul className={styles.categoryCardContainer}>
        <CategoryCard categoties={categoties} />
      </ul>
      <h3 style={{ paddingBottom: "0px" }}>New vacancies</h3>
      <p
        style={{
          fontWeight: "400",
          fontSize: "15px",
          backgroundColor: "rgba(228, 242, 255, 1)",
          paddingTop: "0 ",
          color: "rgba(141, 141, 141, 0.8)",
          paddingLeft: "101px",
          paddingBottom: "43px",
        }}
      >
        Find your dream job now
      </p>
      <ul className={styles.mainNewVacanciesList}>
        <VacanciesCard mokNewVacancies={mokNewVacancies} />
      </ul>
      <div className={styles.mainExsBtnContainer}><ExsBtn  bgColor={"rgba(39, 64, 89, 1)"} width={"236px"} height={"63px"} color={"rgba(255, 255, 255, 1)"}  text={"All vacancies"} fontSize={"20px"} fontWeight={"500px"}/></div>
    </div>
  );
}
export default Main;
