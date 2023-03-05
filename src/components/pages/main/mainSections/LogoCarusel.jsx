import React from 'react'
import FigmaIcon from '../../../../assets/companyLogos/Figma'
import GoogleIcon from '../../../../assets/companyLogos/Google'
import MetaIcon from '../../../../assets/companyLogos/Meta'
import MicrosoftIcon from '../../../../assets/companyLogos/Microsoft'
import SlackIcon from '../../../../assets/companyLogos/Slack'
import TeslaIcon from '../../../../assets/companyLogos/Tesla'
import TheGuardianIcon from '../../../../assets/companyLogos/TheGueardian'

const LogoCarusel = () => {
    return (
        <div className='LogoCarusel max-w-[70rem] mx-auto px-4 sm:px-6 lg:px-8 flex h-full py-20'>
            <div className='w-full flex flex-col gap-20'>

                <h2 className='text-center max-w-4xl mx-auto text-xl text-slate-800 sm:text-2xl md:mt-5 md:text-3xl'>
                    <span className='text-slate-500'>Powering the world’s best product teams.</span> <br />
                    From next-gen startups to established enterprises.
                </h2>

                <div className='relative overflow-hidden w-full '>
                    <div className="absolute z-10 right-0 bg-gradient-to-l from-white opacity-[100%] h-full w-[20%]"></div>
                    <div className="CompanyLogos flex gap-10 items-center">
                        <FigmaIcon />
                        <GoogleIcon />
                        <MetaIcon />
                        <MicrosoftIcon />
                        <SlackIcon />
                        <TeslaIcon />
                        <TheGuardianIcon />
                    </div>
                    <div className="absolute z-10 top-0 bg-gradient-to-r from-white opacity-[100%] h-full w-[20%]"></div>
                </div>

            </div>
        </div>
    )
}

export default LogoCarusel