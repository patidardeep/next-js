'use client'

export default function Product(props){
    console.log(props)
    return(
        <div>
            <button onClick={()=>alert(props.price)}>Click Now</button>
        </div>
    )
}