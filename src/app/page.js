
import custom from './custom.module.css'
import other from './other.module.css'
import outside from '@/outside.module.css'
export default function Home(){
  return(
    <div>
<h1 className={custom.main}>CSS module with Nextjs </h1>  
<h1 className={other.main}>Heading 2</h1>  
<h3 className={outside.main}>ouside module css</h3>

    </div>
  )
}