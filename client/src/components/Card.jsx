import doggie from '../Videos/Doggie.mp4'
import {Icon} from "@iconify/react"
import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const Card = (props) => {
  const {videos} =props
  const [showModal, setShowModal] = React.useState(false);
  const [message, setMessage] = useState('');
  const length = videos.like.length
  const [updated, setUpdated] = useState(message);
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    
    setUpdated(message);
  };
  return (
    <>
    <div className="inline-block mr-4 mb-4 ">
    <div
      className="block  rounded-lg bg-primary shadow-lg ">
      <video className='rounded-lg' width="750" height="500" controls >
      <source src={doggie} type="video/mp4"/>
     </video>
      <div className="p-6">
        <h5
          className="mb-2 text-xl font-semibold leading-tight text-neutral-800">
          {videos.title}
        </h5>
        <Icon icon="ant-design:like-outlined" color="black" className="cursor-pointer text-3xl" />
        {length}
         
        <p className="mb-4 text-base text-neutral-600 ">
          {videos.description}
        </p>
        <button
          type="button"
          className="inline-block rounded bg-secondary px-6 pt-2.5 pb-2 text-xs uppercase leading-normal text-white font-semibold shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          data-te-ripple-init
          data-te-ripple-color="light"
          onClick={() => setShowModal(true)}>
          Comments
        </button>
        <>
         {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Comments
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <input type="text" name="message" placeholder='Write a comment'
        onChange={handleChange}
        value={message}/>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 mx-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleClick}
                  >
                    Insert
                  </button>

                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. 
                  </p>
                  <hr />
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                  <hr />
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">{updated}</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
      </div>
    </div>
  </div>

  
  </>
  )
}

export default Card