'use client'
import { useState } from "react"
import style from './style.module.css'

export default function Home(){
  const [color,setColor] = useState("red")
  const {red} = style
return(
  <div>
    <h1 className={color =="red"?style.red:style.green}>Condition  with Style</h1>
    <h2 style={{backgroundColor:color=="red"?'red':'green'}}>Heading2 </h2>
    <h3 id={style.orange}>Heading 3</h3>
    <h4 className={red}>Deepak</h4>
    <h4>Deepak</h4>
    <h4>Deepak</h4>
    <button onClick={()=>setColor("green")}>Update Color</button>
  </div>
)
}