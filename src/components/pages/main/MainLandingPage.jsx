import CoommentsSection from "./mainSections/CoommentsSection";
import CtaSection from "./mainSections/CtaSection";
import FeaturesSection from "./mainSections/FeaturesSection";
import HeroSection from "./mainSections/HeroSection";
import LogoCarousel from "./mainSections/LogoCarusel";

function LnadingPage() {
    return (
        <div>
            {/* HERO SECTION */}
            <div className="HeroSectio relative bg-slate-300 w-full h-[91vh]">
                <div class="absolute z-10 bg-gradient-to-t bottom-0 from-white opacity-[100%] h-[50%] w-full"></div>
                <div className="absolute z-20 w-full h-full">
                    <HeroSection />
                </div>
            </div>

            {/* LOGO SECTION */}
            <div className="LogosSection">
                <LogoCarousel />
            </div>

            {/* FEATURES SECTION */}
            <div className="FeaturesSection w-full">
                <FeaturesSection />
            </div>

            {/* COMMENTS SECTION */}
            <div className="CommentsSection relative">
                <CoommentsSection />
            </div>

            {/* GET STARTED SECTION */}
            <div className="CtaSection">
                <CtaSection />
            </div>
        </div>
    );
}

export default LnadingPage;