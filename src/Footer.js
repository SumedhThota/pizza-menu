export default function Footer (){
    const hour = new Date().getHours()
    const openHour = 12
    const closeHour = 22

    if(hour >=openHour && hour <=closeHour){
        return <div>
        <footer>{new Date().toLocaleTimeString()}. We're currently open</footer>
    </div>
    }
    else{
        return <div>
        <footer>{new Date().toDateString()}. We're currently closed.</footer>
    </div>
    }
    
}