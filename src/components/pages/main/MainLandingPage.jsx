import TasksSectionSvg from "../../../assets/svg/TasksSectionSvg";
import CoommentsSection from "./mainSections/CoommentsSection";
import CtaSection from "./mainSections/CtaSection";
import FeaturesSection from "./mainSections/FeaturesSection";
import HeroSection from "./mainSections/HeroSection";
import LogoCarousel from "./mainSections/LogoCarusel";

function LnadingPage() {

    return (
        <div>
            {/* HERO SECTION */}
            <div className="HeroSectio relative w-full h-[91vh]">
                <HeroSection />
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