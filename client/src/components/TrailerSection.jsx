import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { dummyTrailers } from '../assets/assets'
import BlurCircle from './BlurCircle'

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])
  const [play, setPlay] = useState(false)

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg text-center">
        Trailers
      </p>

      <div className="relative mt-6 max-w-5xl mx-auto rounded-lg overflow-hidden">

        {/* PLAYER (ALWAYS PRESENT) */}
        <ReactPlayer
          url={currentTrailer.videoUrl}
          playing={play}
          controls
          width="100%"
          height="540px"
        />

        {/* THUMBNAIL OVERLAY */}
        {!play && (
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setPlay(true)}
          >
            <img
              src={currentTrailer.image}
              alt="Trailer Thumbnail"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="bg-black/70 text-white px-6 py-3 rounded-full text-xl">
                ▶ Play Trailer
              </div>
            </div>
          </div>
        )}

        <BlurCircle top="-100px" right="-100px" />
      </div>

      {/* TRAILER LIST */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => {
              setCurrentTrailer(trailer)
              setPlay(true)
            }}
          >
            <img
              src={trailer.image}
              alt={`Trailer ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg hover:scale-105 transition"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrailerSection
