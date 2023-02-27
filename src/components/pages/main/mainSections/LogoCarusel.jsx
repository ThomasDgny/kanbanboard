import React from 'react'

const LogoCarusel = () => {
    return (
        <div className='LogoCarusel h-full flex items-center justify-center'>
            <div className='w-full max-w-[70rem] flex flex-col gap-5'>
                <h1 className='text-[2rem] text-center text-slate-800'><span className='text-slate-500'>Powering the world’s best product teams.</span> <br />
                    From next-gen startups to established enterprises.</h1>
                <div className="CompanyLogos flex gap-10 items-center overflow-hidden w-full">
                    <img src="logo2.png" alt="Logo 2" class="h-8 object-cover" />
                    <img src="logo3.png" alt="Logo 3" class="h-8 object-cover" />
                    <img src="logo1.png" alt="Logo 1" class="h-8 object-cover" />
                    <img src="logo1.png" alt="Logo 1" class="h-8 object-cover" />
                    <img src="logo1.png" alt="Logo 1" class="h-8 object-cover" />
                    <img src="logo1.png" alt="Logo 1" class="h-8 object-cover" />
                    <img src="logo1.png" alt="Logo 1" class="h-8 object-cover" />
                    <img src="logo1.png" alt="Logo 1" class="h-8 object-cover" />
                    <img src="logo1.png" alt="Logo 1" class="h-8 object-cover" />
                    <img src="logo1.png" alt="Logo 1" class="h-8 object-cover" />
                    <img src="logo1.png" alt="Logo 1" class="h-8 object-cover" />
                </div>
            </div>
        </div>
    )
}

export default LogoCarusel