import React, {  } from "react";
import SliderFilter from "./SLiderFilter";

const SlideBar = () => {
  const [rangeStart, setRangeStart] = React.useState<number>(20);
  const [rangeEnd, setRangeEnd] = React.useState<number>(37);

  return (
    <div>
      {/* filter slider */}
      <SliderFilter
        setRangeStart={setRangeStart}
        setRangeEnd={setRangeEnd}
        rangeStart={rangeStart}
        rangeEnd={rangeEnd}
      />
    </div>
  );
};

export default SlideBar;
