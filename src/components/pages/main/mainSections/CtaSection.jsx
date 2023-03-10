import React from 'react'
import { useNavigate } from 'react-router-dom'
import SiteLogoIcon from '../../../../assets/siteLogo/SiteLogo'
import { UserAuth } from '../../../../context/UserAuth'

const CtaSection = () => {
    const navigate = useNavigate()
    const { user } = UserAuth()

    const handleCtaBtn = () => {
        user ? navigate('/dashboard') : navigate('/signin')
    }


    return (
        <div className="Cta_Header text-center py-24 max-w-[90rem] mx-auto px-4 flex flex-col gap-10 items-center">

            <div className="relative bg-gradient-to-tr from-blue-700 to-blue-900 w-[12vh] h-[12vh] rounded-lg">
                <div className="absolute h-full w-full top-[25%] left-[25%]">
                    <SiteLogoIcon height={"40"} />
                </div>
            </div>
            <div>
                <h2 className="text-8xl text-[3rem] sm:text-[4rem] md:text-[6rem] leading-[130%] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                    Crate for the future.
                </h2>
                <p className="mt-3 text-slate-800 max-w-4xl mx-auto text-xl sm:text-2xl md:mt-5 md:text-3xl">
                    Create and Start your first project with JettWork today.
                </p>
            </div>
            <div className="mt-5 max-w-md mx-auto flex justify-center space-x-4">
                <button onClick={handleCtaBtn} className="inline-flex text-[18px] md:text-[24px] items-center justify-center px-12 py-4 border  rounded-md font-medium text-white bg-gradient-to-tr from-[#1ec3ff] to-[#008be8] border-[#00BCFF] focus:outline-none focus:ring-8 focus:ring-offset-2 focus:ring-[#e3f4ffb9] shadow-lg shadow-[#00bbff7e]">
                    Get Started
                </button>
            </div>


        </div>
    )
}

export default CtaSection