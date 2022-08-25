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
import search from "../data/search.png";

import Trends from "../components/Trends";
import Tweets from "../components/Tweets";

function Home() {
  return (
    <div className="">
      <div className="flex relative flex-wrap">
        <div className="border-r-[1px] border-gray-200 w-[60%]">
          <div className="flex sticky top-0 px-3 bg-white justify-between items-center h-16 pt-3">
            <div className="font-bold text-xl">Home</div>
            <img src={newLogo} alt="" className="w-5 h-5" />
          </div>
          {/* tweet */}
          <div className=" max-w-none">
            <div className="flex  gap-x-2 my-2 border-y-[1px] border-gray-200 p-3 w-full">
              <img src={me} alt="" className="h-12 w-12 rounded-full" />
              <div className="flex flex-col mt-2 w-full">
                <div className="font-normal text-xl mb-4">
                  Hello, I'm a Software Engineer
                </div>
                <div className="flex items-center gap-x-3">
                  <img src={world} alt="" className="h-[16px] w-[16px]" />
                  <div className="text-blue">Everyone can reply</div>
                </div>

                <input
                  type=""
                  className="bg-transparent border-b-[1px] border-gray-200 mb-6 focus:outline-none "
                />
                <div className="flex justify-between items-center ">
                  <div className="flex mr-14">
                    <img
                      src={gallery}
                      alt=""
                      className="w-[17.1px] h-[17.1px] mr-3"
                    />
                    <img
                      src={gif}
                      alt=""
                      className="w-[17.1px] h-[17.1px] mr-3"
                    />
                    <img
                      src={pool}
                      alt=""
                      className="w-[17.1px] h-[17.1px] mr-3"
                    />
                    <img
                      src={emoji}
                      alt=""
                      className="w-[17.1px] h-[17.1px] mr-3"
                    />
                    <img
                      src={date}
                      alt=""
                      className="w-[17.1px] h-[17.1px] mr-3"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src={limit}
                      alt=""
                      className="w-[22px] h-[22px] mr-3"
                    />
                    <div className="border-r-2 border-gray-400 h-5 mr-3"></div>
                    <img src={add} alt="" className="w-[30px] h-[30px] mr-3" />
                    <div className="bg-blue text-white rounded-full items-center py-[9px] px-5 flex justify-center font-bold">
                      Tweet
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Feeds  */}
            <Tweets
              name="Afolabi Segun"
              likedby="Figma"
              time="3"
              handle="lekkss"
              text="The DesignLab is doing major work on Community-Driven Design,
              with several different variants. If you are working in this
              area, submit a paper to the DIS conference here in San Diego
              (see DesignLab posting below)....
              https://facebook.com/don.norman.18/..."
            />
            <Tweets
              name="Afolabi Segun"
              likedby="Figma"
              time="3"
              handle="lekkss"
              text="The DesignLab is doing major work on Community-Driven Design,
              with several different variants. If you are working in this
              area, submit a paper to the DIS conference here in San Diego
              (see DesignLab posting below)....
              https://facebook.com/don.norman.18/..."
            />
            <Tweets
              name="Afolabi Segun"
              likedby="Figma"
              time="3"
              handle="lekkss"
              text="The DesignLab is doing major work on Community-Driven Design,
            with several different variants. If you are working in this
            area, submit a paper to the DIS conference here in San Diego
            (see DesignLab posting below)....
            https://facebook.com/don.norman.18/..."
            />
            <Tweets
              name="Afolabi Segun"
              likedby="Figma"
              time="3"
              handle="lekkss"
              text="The DesignLab is doing major work on Community-Driven Design,
              with several different variants. If you are working in this
              area, submit a paper to the DIS conference here in San Diego
              (see DesignLab posting below)....
              https://facebook.com/don.norman.18/..."
            />
            <Tweets
              name="Afolabi Segun"
              likedby="Figma"
              time="3"
              handle="lekkss"
              text="The DesignLab is doing major work on Community-Driven Design,
              with several different variants. If you are working in this
              area, submit a paper to the DIS conference here in San Diego
              (see DesignLab posting below)....
              https://facebook.com/don.norman.18/..."
            />
            <Tweets
              name="Afolabi Segun"
              likedby="Figma"
              time="3"
              handle="lekkss"
              text="The DesignLab is doing major work on Community-Driven Design,
              with several different variants. If you are working in this
              area, submit a paper to the DIS conference here in San Diego
              (see DesignLab posting below)....
              https://facebook.com/don.norman.18/..."
            />
            <Tweets
              name="Afolabi Segun"
              likedby="Figma"
              time="3"
              handle="lekkss"
              text="The DesignLab is doing major work on Community-Driven Design,
              with several different variants. If you are working in this
              area, submit a paper to the DIS conference here in San Diego
              (see DesignLab posting below)....
              https://facebook.com/don.norman.18/..."
            />
          </div>
        </div>
        {/* Other Half */}
        <div className="md:flex flex-col mx-2 mt-3 h-full overflow-y-auto   hidden ">
          {/* Search */}
          <div className="bg-red-400 h-fit fixed">
            <div className="bg-gray-200 flex flex-wrap rounded-full h-11 items-center gap-2 px-2 mb-5 ">
              <img src={search} alt="" className="h-[18px]" />
              <input
                type=""
                className="bg-transparent border-none rounded-r-full  h-full focus:outline-none"
                style={{}}
              />
            </div>
          </div>
          {/* Trends */}
          <div className="rounded-xl bg-gray-200 p-3 mt-[55px] h-fit">
            <div className="font-bold text-xl mb-7">Trends for you</div>
            <Trends
              category="Sports"
              main="penaldo"
              tweets="22.3k"
              type="Trending"
            />
            <Trends
              category="Sports"
              main="penaldo"
              tweets="22.3k"
              type="Trending"
            />

            <Trends
              category="Sports"
              main="penaldo"
              tweets="22.3k"
              type="Trending"
            />
            <Trends
              category="Sports"
              main="penaldo"
              tweets="22.3k"
              type="Trending"
            />
            <Trends
              category="Sports"
              main="penaldo"
              tweets="22.3k"
              type="Trending"
            />
            <Trends
              category="Sports"
              main="penaldo"
              tweets="22.3k"
              type="Trending"
            />

            <Trends
              category="Sports"
              main="penaldo"
              tweets="22.3k"
              type="Trending"
            />
            <Trends
              category="Sports"
              main="penaldo"
              tweets="22.3k"
              type="Trending"
            />

            <Trends
              category="Sports"
              main="penaldo"
              tweets="22.3k"
              type="Trending"
            />
            <Trends
              category="Sports"
              main="penaldo"
              tweets="22.3k"
              type="Trending"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
