import React from 'react'

// import Text from "@/components/ui/Text";
const Slide1 = () => {
  return (
    <div className="relative h-screen mob:h-full min-h-[784px] flex justify-center items-center">
      <video
        preload="none"
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://firebasestorage.googleapis.com/v0/b/innate-bb90b.firebasestorage.app/o/website-homepage.mp4?alt=media&token=3a0019cb-9ce1-4740-abe6-41c3f53bbe3e"
          type="video/mp4"
        />
      </video>
    </div>
  )
}

export default Slide1
