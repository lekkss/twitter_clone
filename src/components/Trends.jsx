import React from "react";

function Trends({ category, type, tweets, main }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <div className="text-[#5B7083] text-sm">
          {category} . {type}
        </div>
        <div className="font-extrabold text-[#5B7083]">...</div>
      </div>
      <div className="text-[17px] font-bold capitalize">{main}</div>
      <div className="text-[#5B7083] text-sm">{tweets} Tweets</div>
    </div>
  );
}

export default Trends;
