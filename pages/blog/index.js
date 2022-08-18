import Link from 'next/link';
import React from 'react'
import Navbar from '../../Componets/Navbar'
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
const blog = ({data}) => {
  return (
    <div>
      <Navbar />
      {
        data.slice(0,5).map((curElem)=>{
          return  <div key={curElem.id} className="ssr-styles">
          <h3>{curElem.id}</h3>
          <Link href={`/blog/${curElem.id}`}>
            <h2>{curElem.title}</h2>
          </Link>
        </div>
        })}
     
     <h1 style={{color: 'green'}}>My Blog</h1>
     </div>

     
  )
}

export default blog