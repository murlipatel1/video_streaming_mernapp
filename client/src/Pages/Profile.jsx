import React from 'react'
import SideBar from '../components/SideBar'
import Navbar from './Navbar'

const Profile = () => {
    const json = localStorage.getItem('token')
  return (
    <>

<div className="font-Roboto">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <SideBar active="profile" />
        <div className="mt-8">
        <form >
                        <div className="mb-4">
                          <input
                            type="text"
                            name="name"
                            className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                            id="exampleFormControlInput1"
                            value={json.name}
                            placeholder="Name"
                            minLength={5}
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="email"
                            className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                            id="exampleFormControlInput1"
                            name="email"
                            value={json.email}
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="email"
                            className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                            id="exampleFormControlInput1"
                            name="email"
                            value={json.domain}
                             
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                            id="exampleFormControlInput1"
                            name="password"
                            value={json.password}
                            placeholder="Password"
                            minLength={5}
                            required
                          />
                        </div>
                        </form>
        </div>
      </div>
    </div>
    <h4 className="mt-1 mb-12 pb-1 text-xl font-semibold"></h4>
                        </>
  )
}

export default Profile