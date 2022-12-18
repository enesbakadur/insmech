import React, { useEffect } from 'react'
import cardsContent from '../../api/OurExpertise.json'
import OurExpertiseCard from './card/OurExpertiseCard'


export default function OurExpertise() {
  return (
    <section className="container py-20 flex flex-col items-center justify-center gap-y-4 text-center leading-tight">
        <h2 className="text-white font-bold text-xl">UZMANLIKLARIMIZ</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cardsContent.map(cardsContent => (
                <OurExpertiseCard icon={cardsContent.icon} title={cardsContent.title} description={cardsContent.description} />
            ))}
        </div>
    </section>
  )
}
