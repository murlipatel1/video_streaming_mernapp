import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import Navbar from './Navbar'

const Profile = () => {
  const json = localStorage.getItem('token')

  const [inputText, setInputText] = useState('');
  const [inputList, setInputList] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddClick = () => {
    setInputList([...inputList, inputText]);
    setInputText('');
  };

  return (
    <>

      <div className="font-Roboto">
        <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
          <SideBar active="profile" />
          <div className="mt-8">
            <h2 className="text-4xl font-medium mb-4">Profile</h2>

            <div className="mb-4">
              <h2>Email</h2>
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
              <h2>Password</h2>
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

            <div>
              <input className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" placeholder='Write skills' type="text" value={inputText} onChange={handleInputChange} />
              <button className="bg-secondary text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 my-3 ml-2 ease-linear transition-all duration-150" onClick={handleAddClick}>Add</button>
              <ul>
                <h2 className="text-xl font-medium mb-4">Skills</h2>
                {inputList.map((item, index) => (
                  <li className="text-xl font-medium mb-4" key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Save Changes
            </button>
            <button
              type="button"
              className="bg-secondary text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-2 ease-linear transition-all duration-150"
              data-te-ripple-init
              data-te-ripple-color="light">
              Change password
            </button>

          </div>
        </div>
      </div>
      <h4 className="mt-1 mb-12 pb-1 text-xl font-semibold"></h4>
    </>
  )
}

export default Profile