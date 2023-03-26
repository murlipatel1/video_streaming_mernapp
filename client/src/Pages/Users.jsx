import React from 'react'
import ProfileCard from '../components/ProfileCard'
// import ProfileCard2 from '../components/ProfileCard2'
import SideBar from '../components/SideBar'

const Users = () => {
  return (
    <div className="font-Roboto">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <SideBar active="users" />
        <div className="mt-4 px-5">
          <div className="mt-5 ml-5">
            <h2 className="text-4xl font-medium ">Users</h2>
          </div>
          <div className='flex flex-wrap'>
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Users