import Navbar from '../Componets/Navbar';
import Head from 'next/head'

const index = () => {
  return (
    <>
   <Head>
    <title>
      Home page
    </title>
   </Head>
  <Navbar />
  <div>
    <h2>Hello world</h2>
  </div>
    </>
  )
}

export default index