'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"

 export default function Home(){
//  const router = useRouter();
const router = useRouter();
const navigation = (name)=>{
  router.push(name)
}

    return(
    <div>
      <h1> 404 not found</h1>
      <br /><br />

      <Link href="/login/">Go to Login Page</Link>
      <br /> <br />

      {/* <button onClick={()=>router.push("/about")}>go to about page</button> */}
      <button onClick={()=>navigation("/about")}>go to about page</button>


    </div>
  )
 }