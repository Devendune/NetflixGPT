import React from 'react'

const VideoTitle = ({ title,overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute bg-gradient-to-r">
     <h1 className="text-6xl text-white font-bold">{title}</h1>
     <p className="py-6 text-white w-1/2">{overview}</p>
     <div className="flex space-x-4">
        <button className="bg-white text-black p-4 px-12 text-xl font-bold rounded hover:bg-gray-200">
            <span className="text-black">▶</span> Play</button>
        <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded hover:bg-gray-600">
            ⓘ More Info</button>
     </div>
    </div>
  )
}

export default VideoTitle;