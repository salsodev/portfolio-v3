"use client";

import { useState } from "react";
import TimeTravelModal from "./TimeTravelModal";

function TimeTravelControl() {
  const [openTimeVault, setOpenTimeVault] = useState(false);

  return (
    <>
      <div className="fixed z-10 bottom-10 right-8 animate-pulse">
        <video
          src="/videos/timeTravel.mp4"
          width={40}
          height={40}
          aria-label="time travel machine"
          className="cursor-pointer"
          autoPlay
          loop
          onClick={() => setOpenTimeVault(!openTimeVault)}
        ></video>
      </div>
      {openTimeVault && <TimeTravelModal setCloseModal={setOpenTimeVault} />}
    </>
  );
}
export default TimeTravelControl;
