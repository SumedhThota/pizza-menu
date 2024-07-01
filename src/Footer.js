import './index.css'
import Order
 from './Order'
export default function Footer (){
    const hour = new Date().getHours()
    const openHour = 12
    const closeHour = 22
    const isOpen = hour >= openHour && hour <= closeHour

    return (
        <div class="footer">
            {isOpen?(<Order openHour={openHour} closeHour = {closeHour}/>): 
                    (<div className = "order">
                    <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>
                </div>)
                }
        </div>
    )
    
}