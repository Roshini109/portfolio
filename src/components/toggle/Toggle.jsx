import './toggle.css'
import { useContext } from 'react'
import {ThemeContext} from "../../context"

export default function Toggle() {

const theme = useContext(ThemeContext)

const handleClick =() =>{
  theme.dispatch({type:"TOGGLE"})
}

  return (
    <div className="t">
        <img src="./portfolio/assets/lightDark.png" alt="" className="tIcon" />
        <div className="tBtn" onClick={handleClick} style={{left:theme.state.darkMode ? 0:25}}></div>
    </div>
  )
}
