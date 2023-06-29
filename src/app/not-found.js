import Link from "next/link"



export default function NotFound(){
    return(
        <div>
            <h1>This Page is Not Found.</h1>
            <Link href="/" >go Back to Home page</Link>
        </div>
    )
}