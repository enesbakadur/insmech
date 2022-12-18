import React from 'react'
import FordLogo from '../../assets/references/ford.png'
import references from '../../api/references.json'

export default function OurReferences() {
  return (
    <section className="container py-20 flex flex-col items-center justify-center gap-y-4 leading-tight">
        <h2 className="text-white font-bold text-xl">REFERANSLARIMIZ</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 w-full gap-4">
            {references.map(references => (
                <div className="bg-card-gray p-8 border border-card-stroke rounded-[20px] hover:bg-card-stroke">
                  <img src={references.image}/>
                </div>
            ))}
            
        </div>
    </section>
  )
}
