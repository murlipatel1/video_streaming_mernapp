import React, {useEffect} from "react"
import SideBar from "../components/SideBar"
import axios from "axios"
import Card from "../components/Card"

const Overview = () => {
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/get/getquote", {
  //       company: "AAPL",
  //     })
  //     .then((res) => {
  //       // console.log(res.data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])
  let notes=[1,2,3]

  return (
    <div className="font-Roboto">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <SideBar active="overview" />

        <div className="mt-8">
        {notes.map((note) => {
          return (
            <Card key={note._id} note={note} />
          );
        })}
          <Card /> 
        </div>
      </div>
    </div>
  )
}

export default Overview
