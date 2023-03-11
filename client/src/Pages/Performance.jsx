import React, {useEffect} from "react"
import SideBar from "../components/SideBar"
import axios from "axios"

const Performance = () => {

  return (
    <div className="font-Roboto">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <SideBar active="yourperformance" />
        <div className="mt-4 px-5">
          <div className="mt-5 ml-5">
            <h2 className="text-4xl font-medium ">Performance</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Performance
