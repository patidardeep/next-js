
export default function Home(){
  return(
    <div>
      <h1>Hello</h1>
      <User name ="deepak"/>
    </div>
  )
}


const User=(props)=>{
return(
  <div><h1>Hello {props.name}</h1></div>
)
}
