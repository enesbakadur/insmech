import React, { useEffect } from 'react'
import machineContent from '../../api/OurMachines.json'
import OurMachineRow from './card/OurMachineRow'

export default function OurMachines() {
  useEffect(() => {
    let imageContainer = document.getElementsByClassName('img-container')
    let machineContent = document.getElementsByClassName('machine-content')
    let childItem1 = imageContainer.item(1)
    let machineChildItem1 = machineContent.item(1)
    let childItem2 = imageContainer.item(3)
    let machineChildItem2 = machineContent.item(3)
    childItem1.classList.remove('md:order-last', 'md:-ml-20', 'md:before:bg-gradient-to-r')
    childItem1.classList.add('md:-mr-20', 'md:before:bg-gradient-to-l' )
    machineChildItem1.classList.remove('md:text-right')
    machineChildItem1.classList.add('md:text-left')
    childItem2.classList.remove('md:order-last', 'md:-ml-20', 'md:before:bg-gradient-to-r')
    childItem2.classList.add('md:-mr-20', 'md:before:bg-gradient-to-l' )
    machineChildItem2.classList.remove('md:text-right')
    machineChildItem2.classList.add('md:text-left')
  })
  return (
    <section className="container py-20 flex flex-col items-center justify-center gap-y-4 leading-tight">
        <h2 className="text-white font-bold text-xl">MAKİNE PARKURUMUZ</h2>
        <div className="w-full flex flex-col gap-y-4">
        {machineContent.map(machineContent => (
                <OurMachineRow image={machineContent.image} title={machineContent.title} li1={machineContent.li1} li2={machineContent.li2} li3={machineContent.li3} />
            ))}
        </div>
    </section>
  )
}
