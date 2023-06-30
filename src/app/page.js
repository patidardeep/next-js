import Link from "next/link"

export default function Home(){
  return(
    <div>
      <h1>Fetch Data with API in server Component</h1>
      <Link href="/productlist">Go to Product List</Link>

    </div>
  )
}