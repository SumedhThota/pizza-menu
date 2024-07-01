export default function Order({openHour, closeHour}){
    return <div className = "order">
    <p>We're open until {closeHour}:00. Come visit us. Order online.</p>
    <button className="btn">Order</button>
    </div>
}