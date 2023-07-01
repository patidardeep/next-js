import Image from "next/image"
import Profile from "../../public/img.jpg"

export default function Home(){
  console.log(Profile)
return(
  <div>
   <h1>Image Optimization in Next</h1>
{/* <Image
src={Profile}
/>

<img
src={Profile.src}
/> */}
<Image
src="https://unsplash.com/photos/a-close-up-of-a-building-with-a-clock-on-it-7n289pEjSZ0"
width={200}
height={200}
/>

  </div>
)
}