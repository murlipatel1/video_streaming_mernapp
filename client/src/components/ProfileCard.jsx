import React, { useContext,useState, useRef, useEffect } from "react";
import image from "../images/hero.png"
const ProfileCard = (props) => {
  const {videos} = props
  return (
    <div>
    <div className="w-72 m-3 max-w-sm bg-white border border-gray-200 items-center rounded-lg shadow ">
        <div className="flex flex-col items-center pt-4 pb-10 ">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={image} alt="Bonnie image"/>
            <h1 className="mb-1 text-2xl font-medium text-gray-900">{videos.name}</h1>
            <span className="text-lg text-gray-500 dark:text-gray-400">{videos.domain}</span>
            <div className="flex mt-4 space-x-3 md:mt-6">
                <a href="#" className="inline-flex items-center px-4 py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Follow</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ProfileCard