import React from 'react'

const FeaturesSection = () => {
    return (
        <div className="FeaturesSection_Body px-4 sm:px-6 lg:px-8 flex flex-col gap-20 h-full items-center justify-center py-20 w-full">
            <div className="FeaturesSection_Header text-center">
                <h1 className="text-[5rem] leading-[130%] font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                    Powerfully simple.

                </h1>
                <p className="mt-3 max-w-4xl mx-auto text-xl text-slate-800 sm:text-2xl md:mt-5 md:text-3xl">
                    Framer makes building professional sites easy, fast and fun while delivering best-in-class SEO, performance, and hosting.
                </p>
            </div>

            <div className="FeaturesSection_Main flex flex-col gap-6 max-w-[90rem] w-full">

                <div class="h-[70vh] w-full grid grid-cols-1 sm:grid-cols-12 gap-6">
                    <div class="col-span-1 sm:col-span-8 bg-gray-200 rounded-2xl border-blue-300 border-[0.5rem]"></div>
                    <div class="col-span-1 sm:col-span-4 bg-gray-400 rounded-2xl border-blue-300 border-[0.5rem]"></div>
                </div>
                <div class="h-[70vh] w-full grid grid-cols-1 sm:grid-cols-12 gap-6">
                    <div class="col-span-1 sm:col-span-4 bg-gray-200 rounded-2xl border-blue-300 border-[0.5rem]"></div>
                    <div class="col-span-1 sm:col-span-8 bg-gray-400 rounded-2xl border-blue-300 border-[0.5rem]"></div>
                </div>
                <div class="h-[70vh] w-full grid grid-cols-1 sm:grid-cols-12 gap-6">
                    <div class="col-span-1 sm:col-span-8 bg-gray-200 rounded-2xl border-blue-300 border-[0.5rem]"></div>
                    <div class="col-span-1 sm:col-span-4 bg-gray-400 rounded-2xl border-blue-300 border-[0.5rem]"></div>
                </div>

            </div>

        </div>
    )
}

export default FeaturesSection