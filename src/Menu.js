import Pizza from './Pizza.js'
import './index.css'

export default function Menu (){
    return <main className = "menu">
        <h2> Our Menu </h2>
        <Pizza name="Focaccia" ingredient="Bread with italian olive oil and rosemary" photoName="pizzas/focaccia.jpg" price={10}/>
        <Pizza name="Pizza Margherita" ingredient="Tomato and mozarella" photoName="pizzas/margherita.jpg" price={10}/>
        <Pizza name="Pizza Spinaci" ingredient="Tomato, mozarella, spinach, and ricotta cheese" photoName="pizzas/spinaci.jpg" price={10}/>
        <Pizza name="Pizza Funghi" ingredient="Tomato, mozarella, mushrooms, and onion" photoName="pizzas/funghi.jpg" price={10}/>
        <Pizza name="Pizza Salamino" ingredient="Tomato, mozarella, and pepperoni" photoName="pizzas/salamino.jpg" price={10}/>
        <Pizza name="Pizza Prosciutto" ingredient="Tomato, mozarella, ham, aragula, and burrata cheese" photoName="pizzas/prosciutto.jpg" price={10}/>
    </main>
}