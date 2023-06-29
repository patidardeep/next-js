'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
 const login = ()=>{
    const router = useRouter();
    const navigation = (name)=>{
        router.push(name)
    }
    return(
        <div>
            <h1 className="heading"> Login Page</h1>
            <br /><br />
            <Link href="/">Go back  to Home page</Link>
            <br /><br />
            <button onClick={()=>navigation("/login/loginStudent")}>go student login page</button>
            <br /><br />
            <button onClick={()=>navigation("/login/loginTeacher")}>go teacher login page</button>
            

        </div>
    )
 }

 export default login;