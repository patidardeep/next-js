import Link from "next/link"

export default function Studentlist(){
    return(
        <div>
            <h1>Student List</h1>
            <ul>
                <li>
                <Link href="/studentlist/anil">Anil</Link>
                </li>
                <li>
                <Link href="/studentlist/sam">sam</Link>
                </li>
                <li>
                <Link href="/studentlist/peter">peter</Link>
                </li>
                <li>
                <Link href="/studentlist/bhasker">bhasker</Link>
                </li>
            </ul>
        </div>
    )
}