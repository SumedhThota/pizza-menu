import Pizza from './Pizza.js'
import './index.css'

export default function Menu (){
    return <main className = "menu">
        <h2> Our Menu </h2>
        <Pizza name="Focaccia" desc="Bread with italian olive oil and rosemary"/>
        <Pizza name="Pizza Margherita" desc="Bread with italian olive oil and rosemary"/>
        <Pizza name="Pizza Spinaci" desc="Bread with italian olive oil and rosemary"/>
        <Pizza name="Pizza Funghi" desc="Bread with italian olive oil and rosemary"/>
        <Pizza name="Pizza Salamino" desc="Bread with italian olive oil and rosemary"/>
        <Pizza name="Pizza Prosciutto" desc="Bread with italian olive oil and rosemary"/>
    </main>
}