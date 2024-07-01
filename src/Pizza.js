 export default function Pizza ({pizza}){
    if(pizza.soldOut){
      return null
    }
    return <li className = "pizza">
        <img src = {pizza.photoName} alt ={pizza.name}></img>
        <div>
          <h3>{pizza.name}</h3>
          <p>{pizza.ingredients}</p>
          <span>{pizza.price + 3}</span>
        </div>
    </li>
}