 export default function Pizza ({pizza}){
  
    return <li className = {`pizza ${pizza.soldOut?("sold-out"):("")}`}>
        <img src = {pizza.photoName} alt ={pizza.name}></img>
        <div>
          <h3>{pizza.name}</h3>
          <p>{pizza.ingredients}</p>
          <span>{pizza.soldOut?(<p>SOLD OUT</p>):(pizza.price + 3)}</span>
        </div>
    </li>
}