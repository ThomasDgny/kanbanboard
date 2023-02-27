import React from 'react';

const HeroSection = () => {
    return (
        <div className="HeroSection_Body max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex h-full items-end py-20">
            <div className="text-center">
                <h1 className="text-[5rem] leading-[130%] font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                    Your Private Work Space Think. Make. Done.
                </h1>
                <p className="mt-3 max-w-4xl mx-auto text-xl text-slate-800 sm:text-2xl md:mt-5 md:text-3xl">
                    Here you can find all the information you need
                </p>
                <div className="mt-5 max-w-md mx-auto flex justify-center space-x-4">
                    <button className="inline-flex text-[24px] items-center justify-center px-12 py-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-blue-600 hover:bg-blue-500 duration-200 focus:outline-double focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
