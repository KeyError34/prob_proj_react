import styles from "./styles.module.css"
function CategoryCard({categoties}){
    return<>
   {categoties.map((el,ind)=>{
    return (<li className={styles.categoryCard} key={ind}><img src={el.url} alt={el.nameImg} /> <p>{el.nameImg}</p></li>)
   })}
    
    </>
}
export default CategoryCard