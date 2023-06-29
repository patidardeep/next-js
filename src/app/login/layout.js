import Link from "next/link"
import "./login.css"

export default function Layout({children}){
    return(
        <div>
           <ul className="main-line">
            <li><h4>Navbar Login</h4></li>
            <li><Link href="/login">Main Login</Link></li>
            <li><Link href="/login/loginStudent">Student Login</Link></li>
            <li><Link href="/login/loginTeacher">Teacher Login</Link></li>
           </ul>
            {children}
        </div>
    )
}