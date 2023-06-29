import Link from "next/link"

export default function Login404(){
    return(
        <div>
            <h1>This Login Page is Not Found</h1>
            <Link href="/login" >go Back to login page</Link>
        </div>
    )
}