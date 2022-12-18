import React from 'react'
import { Link } from 'react-router-dom'

export default function OurExpertiseCard(props) {
  return (
    <>
        <Link>
            <div className="bg-card-gray p-8 border border-card-stroke rounded-[20px] h-full flex flex-col items-center gap-y-3 hover:bg-card-stroke group">
                <img src={props.icon} className="mb-4" />
                <h2 className="text-white font-bold group-hover:text-primary">{props.title}</h2>
                <p className="text-description">
                {props.description}
                </p>
            </div>
        </Link>
    </>
  )
}
