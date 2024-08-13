import styles from "./stytes.module.css";

function VacanciesCard({ mokNewVacancies }) {
  return (
    <>
      {mokNewVacancies.map((el, ind) => {
        return (
          <li className={styles.vacanciesCardContainer} key={ind}>
            <div>
              <img src={el.url} alt={el.jobName} /> <span>{el.jobName}</span>
            </div>
            <p>{el.description}</p>
            <div className={styles.second}>
              <img src={el.locationImg} alt={el.city} />
              <span>
                
                {el.city}, {el.country}
              </span>
            </div>
            <div>
              <img src={el.label} alt={el.labelName} />
              <span>
                {el.labelName}, {el.date}
              </span>
            </div>
          </li>
        );
      })}
    </>
  );
}
export default VacanciesCard;
