import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect } from 'react'
const ErrorPage = () => {
  const router = useRouter();
  useEffect(()=>{
    setTimeout(()=>{
      router.push('/')
    },3000)
  },[])
  return (
    <div>
       <h2>Page NotFound</h2>
        <Link href="/">
            <button>
                Back to home
            </button>
        </Link>
    </div>
  )
}

export default ErrorPage; 