import React from 'react'
import { Link } from 'react-router-dom'
import RightArrowIcon from '../../assets/icons/right-arrow.svg'
import 'animate.css'

export default function WhoAreWe() {
  return (
    <section className="container py-20 flex flex-col items-center justify-center gap-y-4 text-center leading-tight ">
        <h2 className="text-white font-bold text-xl">BİZ KİMİZ?</h2>
        <p className="text-description w-4/5">INSMECH MÜHENDİSLİK makine sektöründeki tecrübesi ve nitelikli mühendislik altyapısı ile Türk sanayisinde ithal etmek yerine imal edebilen firmalardan biri olması amacıyla kurulmuştur. Çok kısa sürede Otomotiv ve Beyaz Eşya sanayisinin devlerine çözüm ortaklığı yapmayı başarmış, gelişen teknoloji ile birlikte imalat tekniğini ve mühendislik yeteneklerini her geçen gün geliştirmeyi başarmıştır.</p>
        <Link to="/" className="flex items-center gap-x-3 group">
            <span className="text-white font-semibold group-hover:text-primary">Birlikte Çalışalım</span>
            <span><img src={RightArrowIcon}/></span>
        </Link>
    </section>
  )
}
