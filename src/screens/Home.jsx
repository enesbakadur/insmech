import React from "react";
import HeroSection from "../components/Home/HeroSection";
import WhoAreWe from "../components/Home/WhoAreWe";
import OurExpertise from "../components/Home/OurExpertise";
import OurMachines from "../components/Home/OurMachines";
import OurReferences from "../components/Home/OurReferences";

function Home() {
    return (
        <>
            <HeroSection />
            <WhoAreWe />
            <OurExpertise />
            <OurMachines />
            <OurReferences />
        </>
    );
}

export default Home;
