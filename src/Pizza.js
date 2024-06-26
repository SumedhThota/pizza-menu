 export default function Pizza (props){
    return <div className = "pizza">
        <img src = {props.pizza.photoName} alt ={props.pizza.name}></img>
        <div>
          <h3>{props.pizza.name}</h3>
          <p>{props.pizza.ingredients}</p>
          <span>{props.pizza.price + 3}</span>
          <p>{props.pizza.soldOut}</p>
        </div>
    </div>
}