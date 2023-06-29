'use client'
import Link from "next/link"
import "./about.css"
import { usePathname } from "next/navigation"


export default function Layout({children}){
    const pathName = usePathname();

    return(
        <div>
           {
            pathName !=="/about/aboutStudent"?
            <ul className="main-box">
            <li><h4>Login Navbar</h4></li>
            <li><Link href="/about">Main About</Link></li>
            <li><Link href="/about/aboutStudent">About Student</Link></li>
            <li><Link href="/about/aboutCollege">About College</Link></li>
        </ul>
            // :null
            :<Link href="/about">Go back to Abot</Link>

           }
        {children}
        </div>
    )
}