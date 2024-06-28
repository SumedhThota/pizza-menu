import './index.css'

export default function Footer (){
    const hour = new Date().getHours()
    const openHour = 12
    const closeHour = 22
    const isOpen = hour >= openHour && hour <= closeHour

    return (
        <div class="footer">
            {isOpen && 
                <div className = "order">
                    <p>We're open until {closeHour}:00. Come visit us. Order online.</p>
                    <button className="btn">Order</button>
                </div>}
                {!isOpen && 
                <div className = "order">
                    <p>We're closed.</p>
                </div>}
        </div>
    )
    
}