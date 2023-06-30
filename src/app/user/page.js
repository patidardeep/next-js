'use client'

import { useState } from "react"


export default function Page(){
    
    const [h3Style,setH3Style] = useState({backgroundColor:"green"})
    return(
        <div>
            <h1 style={{backgroundColor:"black"}}>User Page</h1>
            <h2>heading 2</h2>
            <h3 style={h3Style}>HEading 3 for User</h3>
            <button onClick={()=>setH3Style({backgroundColor:"red"})}>Upadate stayle</button>
        </div>
    )
}