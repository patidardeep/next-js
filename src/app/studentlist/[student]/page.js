'use client'
export default function Student({params}){
    console.log(params)
    return(
        <div>
            <h1>Student Detail</h1>
        <h3>Name:{params.s5tudent}</h3>
        </div>
    )
}