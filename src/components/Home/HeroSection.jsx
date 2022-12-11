import React, { useEffect } from 'react'
import Slider from "react-slick";
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 8000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

  return (
    <section className="relative before:bg-black before:opacity-80 before:w-full before:h-full before:absolute before:top-0 before:z-10">
        <Slider {...settings} >
            <div className="">
                <img src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg" className="w-full h-screen object-cover"/>
            </div>
            <div className="">
                <img src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg" className="w-full h-screen object-cover"/>
            </div>
        </Slider>   
        <div className="container flex flex-col justify-center items-center absolute top-0 h-full left-1/2 -translate-x-1/2 z-20 gap-y-6">
            <h1 className="text-white text-center text-5xl md:text-6xl font-black">
                Insmech Size
                <span className="text-primary">
                    <Typewriter
                    options={{
                        strings: ['Özel Makine', 'Fikstür İmalatı', 'Manipülatör İmalatı'],
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        deleteSpeed: 100,
                        pauseFor: 6000,
                    }}
                    />
                </span>
                Hizmeti Verir
            </h1>
            <p className="text-description text-center w-full md:w-1/2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos explicabo officiis sapiente facilis. Aliquid corrupti necessitatibus dolore, veritatis fuga incidunt vel illo, placeat porro nemo ex impedit pariatur ratione. Fugiat corporis perspiciatis vel ullam odio!</p>
            <button className="bg-primary flex items-center justify-center py-3 px-8 rounded-lg transition text-white font-bold hover:bg-white hover:text-secondary">
                İletişime Geç
            </button>
        </div>
    </section>
    
  )
}
