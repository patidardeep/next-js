'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
    const router = useRouter();
    return (
        <div>
            <h1> About page</h1>
            <button onClick={() => router.push("/")}>go back to home page</button>
            <br /><br />
            <Link href="/about/aboutCollege">Go to about college Page</Link>
            <br /><br />
            <Link href="/about/aboutStudent">Go to about student Page</Link>

        </div>
    )
}

export default About;