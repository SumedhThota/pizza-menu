import './index.css'

export default function Footer (){
    const hour = new Date().getHours()
    const openHour = 12
    const closeHour = 22

    if(hour >=openHour && hour <=closeHour){
        return <div className ="footer">
        <footer>{new Date().toLocaleTimeString()}. We're currently open</footer>
    </div>
    }
    else{
        return <div className ="footer">
        <footer>{new Date().toDateString()}. We're currently closed.</footer>
    </div>
    }
    
}