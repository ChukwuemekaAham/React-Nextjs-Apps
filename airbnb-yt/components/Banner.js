import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className="lg:[500px] xl:[600px] relative h-[300px] sm:h-[400px] 2xl:h-[700px]">
      <Image
        src="/0fm.jpeg"
        layout="fill"
        objectFit="cover"
        objectPosition="left"
        className="animate-fadeIn"
      />
      <div className="absolute top-1/2 w-full text-center transform -translate-y-1/2">
        <p className="text-sm font-bold sm:text-lg animate-slideIn">
          Not sure where to go? Perfect.
        </p>
        <button
          className="my-3 rounded-full bg-white px-10 py-4 font-bold text-purple-500 shadow-md transition duration-150 hover:bg-purple-500 hover:text-white hover:shadow-xl active:scale-90 animate-bounce"
        >
          I'm flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
