import React from 'react'

export default function OurMachineRow(props) {
  return (
    <div className="grid grid-cols-12 items-center our-machine-card">
        <div className="col-span-12 md:-ml-20 md:col-span-10 md:order-last relative rounded-[20px] overflow-hidden before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-gradient-to-t md:before:bg-gradient-to-r before:from-secondary before:z-10 img-container">
            <img src={props.image} className="w-full h-[300px] object-cover object-center" />
        </div>
        <div className="col-span-12 md:col-span-2 -mt-10 md:-mt-0 text-center md:text-right relative z-20 machine-content">
            <h2 className="text-white font-bold text-2xl mb-3">{props.title}</h2>
            <ul className="text-description">
                <li>{props.li1}</li>
                <li>{props.li2}</li>
                <li>{props.li3}</li>
            </ul>
        </div>
    </div>
  )
}
