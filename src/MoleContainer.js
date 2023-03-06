import { useState } from 'react'
import Mole from './Mole.js'

function MoleContainer(props) {
    let [displayMole, setDisplayMole] = useState(false)
    
    return (
        <div>
            <h2>Mole Container</h2>
            <Mole />
        </div>
    )
}

export default MoleContainer



