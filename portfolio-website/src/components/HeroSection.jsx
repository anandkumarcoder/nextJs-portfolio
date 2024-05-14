import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="col-span-7 place-self-center">
      <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hello, I'm Judy </h1>
        <p className="text-[#adb7be] text-lg lg:text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, fuga!</p>
      </div>

      <div className="col-span-5">
        <Image
        src= "/images/hero_image.png"
        alt="hero-image"
        width={300}
        height={300}

        />
      </div>
      </div>
    </section>
  )
}

export default HeroSection