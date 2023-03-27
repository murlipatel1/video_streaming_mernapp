import React, { useContext,useState, useRef, useEffect } from "react";
import ProfileCard from '../components/ProfileCard'
// import ProfileCard2 from '../components/ProfileCard2'
import SideBar from '../components/SideBar'

const Creators = () => {
  const host = "http://localhost:5000";
  const videoInitial = [];

  const [video, setVideo] = useState(videoInitial);

  const getUsers = async () => {
    const response = await fetch(`${host}/api/auth/alluser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "auth-token": localStorage.getItem('token'),
      },
    }); 
    const json = await response.json();
    setVideo(json);
  };

  useEffect(() => {
    
    getUsers();
  }, []);

  return (
    <div className="font-Roboto">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <SideBar active="creators" />
        <div className="mt-4 px-5">
          <div className="mt-5 ml-5">
            <h2 className="text-4xl font-medium ">Creators</h2>
          </div>
          <div className='flex flex-wrap'>

          <div className="flex flex-wrap mt-8">
        {video.map((videos) => {
          return (
            <ProfileCard key={videos._id} videos={videos} />
          );
        })}
        </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Creators