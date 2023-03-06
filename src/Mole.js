import { useEffect } from 'react'
import moleImg from './mole.png'

function Mole(props){
    
    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 3000)  // .ceil() rounds up to smallest integer >= to given number
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} 
                src={moleImg}
                onClick={props.handleClick} 
                alt='mole on hill'
            />
        </div>
    )
}

export default Mole