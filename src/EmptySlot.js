import { useEffect } from "react";
import moleHill from './molehill.png'

function EmptySlot(props){
    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 3000)  // .ceil() rounds up to smallest integer >= to given number
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} 
                src={moleHill} 
                alt='empty molehill'
            />
        </div>
    )
}

export default EmptySlot