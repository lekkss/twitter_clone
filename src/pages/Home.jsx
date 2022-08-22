import React from "react";
import me from "../data/me.jpg";
import newLogo from "../data/new.png";
import world from "../data/world.png";
import gallery from "../data/gallery.png";
import gif from "../data/gif.png";
import pool from "../data/pool.png";
import emoji from "../data/emoji.png";
import date from "../data/date.png";
import limit from "../data/limit.png";
import add from "../data/add.png";

function Home() {
  return (
    <div className="w-full">
      <div className="flex ">
        <div className="border-r-2 border-red-700 w-1/2">
          <div className="flex fixed top-0 bg-white border-b-2 border-red-700">
            <div>Home</div>
            <img src={newLogo} alt="" className="w-10 h-10" />
          </div>
          <div className="mt-12">
            <div className="flex  gap-x-2 my-2 border-y-2 border-gray-400 ">
              <img src={me} alt="" className="h-10 w-10 rounded-full" />
              <div className="flex flex-col">
                <div className="font-semibold">
                  Hello, I'm a Software Engineer
                </div>
                <div className="flex">
                  <img src={world} alt="" className="h-5 w-5" />
                  <div className="text-blue">Everyone can reply</div>
                </div>

                <input
                  type=""
                  className="bg-transparent border-b-2 border-gray-400 w-full mb-6"
                />
                <div className="flex justify-between items-center ">
                  <div className="flex mr-14">
                    <img src={gallery} alt="" className="w-5 h-5 mr-3" />
                    <img src={gif} alt="" className="w-5 h-5 mr-3" />
                    <img src={pool} alt="" className="w-5 h-5 mr-3" />
                    <img src={emoji} alt="" className="w-5 h-5 mr-3" />
                    <img src={date} alt="" className="w-5 h-5 mr-3" />
                  </div>
                  <div className="flex items-center  justify-center">
                    <img src={limit} alt="" className="w-5 h-5 mr-3" />
                    <div className="border-r-2 border-gray-400 h-5 mr-3"></div>
                    <img src={add} alt="" className="w-8 h-8 mr-3" />
                    <div className="bg-blue text-white rounded-full items-center py-[9px] px-5 flex justify-center font-bold">
                      Tweet
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
