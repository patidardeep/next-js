'use client'

import { useState } from "react"

export default function Home(){
// const apple=(item)=>{
// alert("fruit")
// alert(item)
// state--

const [name,setName] = useState("Deepak")
const Changename= ()=>{
  setName("Shubham")
}
// inner componet

const InnerComp = ()=>{
  return(
    <div>
      <h1>Inner comp</h1>
      <h2>heloow world thi is example of Componet inside componet</h2>
    </div>
  )
}


  return(
    <div>
      <h1> Evevent  ,Function and State</h1>
      {/* <button onClick={()=>alert("hello next js")}>Click</button> */}
      {/* <button onClick={apple}>Click</button> */}
      {/* <button onClick={()=>apple("fruits")}>Click</button> */}

<h1>hello {name}</h1>
<button onClick={Changename}>Change Name</button>
<InnerComp/>

      
    </div>
  )
}


