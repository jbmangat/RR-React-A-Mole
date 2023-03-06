import { useState } from 'react'
import Mole from './Mole.js'
import EmptySlot from './EmptySlot.js'

function MoleContainer(props) {
    let [theMole, setTheMole] = useState(false)
    
    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }

    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />

    return (
        <div style={{'display': 'inline-block'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer



