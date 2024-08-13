function SotialLincs({mockSotialLincs}){
    return<div>
   {mockSotialLincs.map((el,ind)=> {
    return(<div key={ind}>
    <img src={el.url} alt={el.nameSotial}/>
    </div>)
   })}
    </div>
}
export default SotialLincs