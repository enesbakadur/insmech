import React from "react"
import { Link } from "react-router-dom";
import RightArrowIcon from '../../assets/icons/right-arrow.svg'
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io'

function Footer() {
    return (
    <>
    <footer className="bg-blue-black">
        <div className="container py-20 divide-y divide-description/10">
            <div className="flex flex-col md:flex-row gap-4 items-center md:items-start justify-center md:justify-start divide-y md:divide-y-0 divide-description/10 mb-4">
                <div className="w-full md:basis-1/3 text-center md:text-left flex flex-col items-center md:block">
                    <h3 className="mb-3">
                        <span className="text-description">YENİ PROJELER İÇİN</span>
                            <br/>
                        <span className="text-primary text-2xl font-bold">DAİMA HAZIRIZ</span>
                    </h3>
                    <Link to="/" className="flex items-center gap-x-3 group">
                        <span className="text-white font-semibold group-hover:text-primary">Birlikte Çalışalım</span>
                        <span><img src={RightArrowIcon}/></span>
                    </Link>
                </div>

                <div className="w-full md:basis-1/3 pt-5 md:pt-0">
                    <h3 className="text-white font-bold mb-4 text-center md:text-left">KURUMSAL</h3>
                    <ul className="text-description font-bold text-center md:text-left">
                        <Link to="/" className="hover:text-primary"><li>ITEM 1</li></Link>
                        <Link to="/" className="hover:text-primary"><li>ITEM 2</li></Link>
                        <Link to="/" className="hover:text-primary"><li>ITEM 3</li></Link>
                        <Link to="/" className="hover:text-primary"><li>ITEM 4</li></Link>
                        <Link to="/" className="hover:text-primary"><li>ITEM 5</li></Link>
                        <Link to="/" className="hover:text-primary"><li>ITEM 6</li></Link>
                    </ul>
                </div>
                <div className="w-full md:basis-1/3 pt-5 md:pt-0">
                    <h3 className="text-white font-bold mb-4 text-center md:text-left">BİZE ULAŞIN</h3>
                    <ul className="text-description text-center md:text-left">
                        <a href="/" className="hover:text-primary"><li>Üçevler Mahallesi Beşevler Sanayi Sitesi 26. Sokak 39. Blok No: 80 Nilüfer/Bursa</li></a>
                        <a href="/" className="hover:text-primary"><li>0224 441 30 02</li></a>
                        <a href="/" className="hover:text-primary"><li>info@insmech.com</li></a>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pt-5 gap-y-4 md:gap-y-0">
                <a href="#" className="group">
                    <h3 className="text-description"><span className="text-white font-bold group-hover:text-primary">Enes Bakadur</span> tarafından hazırlandı</h3>
                </a>
                <div className="flex gap-x-4">
                    <a href="#" className="group">
                        <IoLogoGithub className="fill-description w-6 h-6 group-hover:fill-primary" />
                    </a>
                    <a href="#" className="group">
                        <IoLogoTwitter className="fill-description w-6 h-6 group-hover:fill-primary" />
                    </a>
                    <a href="#" className="group">
                        <IoLogoLinkedin className="fill-description w-6 h-6 group-hover:fill-primary" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
    
    </>
    );
}

export default Footer;
