import React from "react";
import reply from "../data/reply.png";
import retweet from "../data/retweet.png";
import like from "../data/like.png";
import share from "../data/share.png";
import fav from "../data/fav.png";
import me from "../data/me.jpg";

function Tweets({ likedby, name, handle, time, text }) {
  return (
    <div>
      <div className="flex">
        <div className="flex flex-col p-4">
          <div className="flex gap-x-3 justify-start items-center ml-6 mb-3">
            <img src={fav} alt="" className="h-4 w-4" />
            <div className="font-semibold text-sm text-gray-500">
              {likedby} liked
            </div>
          </div>
          <div className="flex gap-x-3">
            <img src={me} alt="" className="h-10 w-10 rounded-full" />
            <div className="flex flex-col ">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-3">
                  <div className="text-sm font-semibold">{name}</div>
                  <div>@{handle}</div>
                  <div>.</div>
                  <div>{time} min</div>
                </div>
                <div>...</div>
              </div>
              <div>{text}</div>
              <div className="flex gap-x-24 mt-4">
                <div className="flex items-center gap-1">
                  <img src={reply} alt="" className="h-[18px] w-[18px]" />
                  <div>14</div>
                </div>
                <div className="flex items-center gap-1">
                  <img src={retweet} alt="" className="h-[18px] w-[18px]" />
                  <div>130</div>
                </div>
                <div className="flex items-center gap-1">
                  <img src={like} alt="" className="h-[18px] w-[18px]" />
                  <div>1,310</div>
                </div>
                <img src={share} alt="" className="h-[18px] w-[18px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweets;
