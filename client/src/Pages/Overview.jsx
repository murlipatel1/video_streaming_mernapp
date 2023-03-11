import React, { useContext,useState, useRef, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import SideBar from "../components/SideBar"
import axios from "axios"
import Card from "../components/Card"

const Overview = () => {

  const context = useContext(noteContext);
  const { video, getNotes,likeNotes } = context;

  useEffect(() => {
    
    getNotes();
  }, []);

  return (
    <div className="font-Roboto">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <SideBar active="overview" />
        <div className="mt-8">
        {video.map((videos) => {
          return (
            <Card key={videos._id} videos={videos} />
          );
        })}
        </div>
      </div>
    </div>
  )
}

export default Overview
