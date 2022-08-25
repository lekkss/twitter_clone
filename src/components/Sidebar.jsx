import React from "react";
import logo from "../data/twitter.png";
import me from "../data/me.jpg";
import { Link, NavLink } from "react-router-dom";
import { link } from "../data/datas";

function Sidebar() {
  return (
    <div className="max-w-xl overflow-y-auto mt-5 mr-14 flex flex-col justify-between h-screen">
      <div className="flex flex-col mb-8">
        <div>
          <Link to="/" className="ml-[60px] ">
            <button>
              <img src={logo} alt="" width="25px" />
            </button>
          </Link>
        </div>
        <div className="mt-3 ml-[60px] ">
          {link.map((item) => (
            <div key={item.name}>
              <NavLink
                to={`/${item.name}`}
                key={link.name}
                style={({ isActive }) => ({
                  // color: isActive ? "#1DA1F2" : "white",
                  fontWeight: isActive ? "bold" : "",
                })}
              >
                <div className="flex flex-row py-[11px] gap-x-4 items-center">
                  <img src={item.icon} alt={item.name} className="w-6 h-6" />
                  <span className="capitalize text-xl">{item.name}</span>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
        <div className="ml-[50px]  mt-[14px] bg-blue text-white rounded-full items-center py-[15px] flex justify-center font-extrabold">
          Tweet
        </div>
      </div>
      <div className="ml-[64px]  flex flex-row mb-5 justify-between">
        <div className="flex gap-x-3 items-center ">
          <div>
            <img src={me} alt="" className="h-10 w-10 rounded-full" />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold">Lekkss</div>
            <div className="text-gray-600">@lekksz</div>
          </div>
        </div>
        <div className="font-extrabold">...</div>
      </div>
    </div>
  );
}

export default Sidebar;
