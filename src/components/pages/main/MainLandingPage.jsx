import CoommentsSection from "./mainSections/CoommentsSection";
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
            <div className="LogosSection h-[20vh] ">
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
            <div>
                <div className="CommentsSection_Header text-center py-24 max-w-[90rem] mx-auto px-4 flex flex-col gap-10 items-center">

                    <div className=" bg-gradient-to-tr from-blue-700 to-blue-900 w-[12vh] h-[12vh] rounded-lg"></div>
                    <div>
                        <h1 className="text-[5rem] leading-[130%] font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                            Built for the future. <br />
                            Available today.
                        </h1>
                        <p className="mt-3 text-slate-800 max-w-4xl mx-auto text-xl sm:text-2xl md:mt-5 md:text-3xl">
                            Design and publish your first free site with Framer today.
                        </p>
                    </div>
                    <div className="mt-5 max-w-md mx-auto flex justify-center space-x-4">
                        <button className="inline-flex text-[24px] items-center justify-center px-12 py-6 border border-transparent rounded-md shadow-sm font-medium text-white bg-blue-600 hover:bg-blue-500 duration-200 focus:outline-double focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                            Get Started
                        </button>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default LnadingPage;