import {Icon} from "@iconify/react"
import React from "react"
import {Link, useNavigate} from "react-router-dom"
import logo from "../images/logo.png"

export default function SideBar(props) {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("auth-token")
    navigate("/")
  }

  const sidebarItems = [
    {
      name: "Videos",
      icon: "bxs:videos",
      link: "/overview",
      active: "overview",
    },
    {
      name: "Your Performance",
      icon: "mdi:performance",
      link: "/yourperformance",
      active: "yourperformance",
    },
    
  ]

  const sidebarItemsList = sidebarItems.map((item, index) => (
    <div
      key={index}
      className={`flex items-center gap-3 p-3 ${
        props.active === item.active ? "bg-[#f9780e23]" : null
      } `}
    >
      <Icon icon={item.icon} color={"black"} className="text-3xl" />
      <Link to={item.link}>
        <h2 className="text-2xl font-medium">{item.name}</h2>
      </Link>
    </div>
  ))

  return (
    <div
      className={`xs:w-4/5 flex min-h-screen w-fit bg-primary px-3 sm:w-3/5 lg:w-4/5 font-Roboto
        `}
    >
      <div className="mt-6 fixed">
        <div className="flex items-center justify-between ml-5">
          <Link to="/">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo"
                className="w-16 h-16 rounded-full "
              />
              <h1 className=" ml-3 text-3xl font-bold">
                App
              </h1>
            </div>
          </Link>
        </div>

        <div className="mt-8 space-y-4 px-3">{sidebarItemsList}</div>

        <div className="mt-4 px-3">
          <button
            className="w-3/5 rounded bg-secondary px-5 py-1 text-2xl font-medium text-white lg:w-4/5"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  )
}
 