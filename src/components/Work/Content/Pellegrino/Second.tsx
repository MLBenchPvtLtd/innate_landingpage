import React from 'react'
interface FirstProps {
  setVideoLoaded: (loaded: boolean) => void // Function that takes a boolean and returns void
}
const Second: React.FC<FirstProps> = ({ setVideoLoaded }) => {
  return (
    <div className="relative w-full z-10  mob:h-[100vh] h-screen min-h-[700px] flex justify-center items-center px-20 mob:px-5">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        onLoadedData={() => {
          setVideoLoaded(true)
        }}
      >
        <source
          src="https://res.cloudinary.com/dpibcz7ui/video/upload/v1738229427/PR_kctlhg.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  )
}

export default Second
