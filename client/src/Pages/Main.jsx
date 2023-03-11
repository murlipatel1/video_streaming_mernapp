import React from "react"
import { Link } from 'react-router-dom'
import hero from '../images/hero.png'
export default function Main() {
  return (
    <>
      <div className="pt-16">
        <div className="container mx-auto flex flex-col flex-wrap items-center px-6 md:px-16 md:flex-row">
          <div className="flex w-full flex-col items-start justify-center text-center md:w-2/5 md:text-left">
          <h1 className="my-4 text-5xl font-bold leading-tight">
              Elevate your Knowledge on this plateform
            </h1> 
            <br />  
            <p className="mb-8 text-2xl leading-normal">
              Trusted by thousands of Students and their Parents
            </p>
            <br />
            <Link className='focus:shadow-outline mx-auto mt-4 rounded-lg bg-secondary px-8 pt-[6px] pb-2 font-bold  text-black hover:border-2 hover:border-secondary hover:bg-transparent hover:duration-300 focus:outline-none lg:mx-0 lg:mt-0 ' to='/login' role='button'>Login</Link>
          </div>
          <div className="w-full py-6 text-center md:w-3/5 md:flex md:justify-center">
            <img
              className=" w-full md:w-4/5"
              src={hero}
              alt="hero"
            />
          </div>
        </div>
      </div>
      
      <br /> <br />
      <div>
    <div className='flex flex-col xl:mt-12 xl:flex-row'>
      <div id="abt" className='abt w-full p-6 mt-8 lg:mt-24 xl:mt-14 xl:p-0 font-bold text-4xl'>
        <h1 className='text-black text-center md:text-4xl xl:bg-secondary xl:p-12 xl:text-centre xl:rounded-r-[6rem] xl:ml-0 xl:text-left xl:mt-0'>About Us</h1></div> 

        <div>
            <p className='text-xl font-thin xl:text-2xl p-7 text-center md:p-16 lg:pt-10'> <p>Our website offers a range of courses taught by experienced instructors, all from the comfort of your own home. Join our community of learners today and take the first step towards achieving your academic goals! <br/></p>

<p className='hidden md:inline-flex mt-8'>Looking for a convenient and flexible way to further your education? Look no further than our website! With a wide range of courses available and the ability to study at your own pace, we make it easy for students of all backgrounds to achieve their academic goals. Join us today and take the first step towards a brighter future!<br/></p>

<p className='font-semibold mt-6'>"Join the Ciper School community today and elevate yourself on next level."</p> </p>
        </div> 
        </div>  
</div>

      </>
  )
}
