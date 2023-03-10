import React, { useState } from 'react'
import LiveIcon from '../../../../assets/icons/LiveSvg'
import GridSvg from '../../../../assets/svg/Grid'
import TaskCardIcon from '../../../../assets/svg/TaskCard'
import TextEditor from '../../../elements/TextEditor'
import progresimg from '../../../../assets/imgs/progress.png'


const FeaturesSection = () => {
    const [decoytext, setdecoytext] = useState('')
    return (
        <div className="FeaturesSection_Body px-4 sm:px-6 lg:px-8 flex flex-col gap-20 h-full items-center justify-center py-20 w-full">

            <div className="FeaturesSection_Header text-center">
                <h2 className="leading-[130%] font-bold text-transparent text-8xl text-[3rem] sm:text-[4rem] md:text-[6rem] bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                    Powerfully simple.

                </h2>
                <p className="mt-3 max-w-4xl mx-auto text-xl text-slate-800 sm:text-2xl md:mt-5 md:text-3xl">
                    Framer makes building professional sites easy, fast and fun while delivering best-in-class SEO, performance, and hosting.
                </p>
            </div>

            <div className="FeaturesSection_Main flex flex-col gap-6 max-w-[90%] w-full">

                <div className="h-[170vh] md:h-[70vh] w-full flex flex-col md:flex-row gap-6 overflow-hidden">

                    <div className="FeaturesCard_Lg bg-[#f9f9f9] h-full w-full md:w-[65%] p-2 rounded-2xl">
                        <div className='relative bg-gradient-to-tr from-[#BF00FF] via-[#BF00FF] to-[#7400FF] drop-shadow-md h-full rounded-2xl w-ful overflow-hidden'>
                            <div className='absolute z-[5] h-full w-full flex flex-col'>
                                <div className='py-10 w-[75%] mx-auto '>
                                    <h1 className='text-[34px] text-white font-bold'>Everything is possible</h1>
                                    <p className='text-white text-[18px] font-medium max-w-2xl'>Create amazing text with our new text editor that loads faster and is more responsive. Our new text editor is designed to save time in your daily life.</p>
                                </div>

                                <div className='overflow-hidden w-full h-96 flex justify-center'>
                                    <div className='TextArea h-full w-[75%] md:w-[65%] bg-white rounded-lg p-5 overflow-hidden drop-shadow-2xl'
                                        style={{ transform: 'scale(1.25)', transformOrigin: 'top' }}
                                    >
                                        <TextEditor
                                            content={decoytext}
                                            setContent={setdecoytext}
                                            readonly={false}
                                            toolBarIsVisble={true}
                                            height={'50vh'}
                                        />
                                    </div>
                                </div>

                            </div>

                            <div className="absolute z-20 bottom-10 flex justify-center opacity-[100%] w-full drop-shadow-xl">
                                <h1 className='rounded-full py-2 px-6 bg-[#0d113b] max-h-max max-w-max text-[12px] flex gap-3 items-center text-white select-none'> <LiveIcon /> Live Componenet</h1>
                            </div>

                            <div className="absolute z-[0]  opacity-[15%] h-full w-full overflow-hidden">
                                <GridSvg />
                            </div>
                        </div>
                    </div>

                    <div className="FeaturesCard_Sm h-[50%] md:h-full  w-full md:w-[35%] bg-[#f9f9f9] p-2 rounded-2xl">
                        <div className='bg-gradient-to-tr h-full from-[#019BFE] to-[#00CAFF] rounded-2xl w-ful overflow-hidden flex flex-col'>
                            <div className='p-10'>
                                <h1 className='text-[32px] text-white font-bold'>Edit Your Task</h1>
                                <p className='text-white text-[18px] font-medium max-w-xl'>Track your tasks, update them and even delete them if you don't need them any more.</p>
                            </div>

                            <div className='w-full h-full flex justify-center'>
                                <TaskCardIcon height={500} />
                            </div>

                        </div>
                    </div>

                </div>

                <div className="h-[170vh] md:h-[70vh] w-full flex flex-col md:flex-row gap-6 overflow-hidden">

                    <div className="FeaturesCard_Sm h-[50%] md:h-full  w-full md:w-[35%] bg-[#f9f9f9] p-2 rounded-2xl">
                        <div className='bg-gradient-to-tr h-full from-[#019BFE] to-[#00CAFF] rounded-2xl w-ful overflow-hidden flex flex-col'>
                            <div className='p-10'>
                                <h1 className='text-[32px] text-white font-bold'>Edit Your Task</h1>
                                <p className='text-white text-[18px] font-medium max-w-xl'>Track your tasks, update them and even delete them if you don't need them any more.</p>
                            </div>

                            <div className='w-full h-full flex justify-center'>
                                <TaskCardIcon height={500} />
                            </div>

                        </div>
                    </div>

                    <div className="FeaturesCard_Lg bg-[#f9f9f9] h-full w-full md:w-[65%] p-2 rounded-2xl">
                        <div className='relative bg-gradient-to-tr from-[#BF00FF] via-[#BF00FF] to-[#7400FF] drop-shadow-md h-full rounded-2xl w-ful overflow-hidden'>
                            <div className='absolute z-[5] h-full w-full flex flex-col'>
                                <div className='py-10 w-[75%] mx-auto '>
                                    <h1 className='text-[34px] text-white font-bold'>Follow Your Progress</h1>
                                    <p className='text-white text-[18px] font-medium max-w-2xl'>Stay motivated with Follow Your Progress! Celebrate successes and keep pushing towards your dreams!</p>
                                </div>

                                <div className='overflow-hidden w-full h-full flex justify-center'>
                                    <img src={progresimg} alt="" className='w-full h-full object-cover drop-shadow-2xl' />
                                </div>

                            </div>

                            <div className="absolute z-[0]  opacity-[15%] h-full w-full overflow-hidden">
                                <GridSvg />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default FeaturesSection



