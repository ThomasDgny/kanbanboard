import React from 'react'
import LiveIcon from '../../../../assets/icons/LiveSvg'
import GridSvg from '../../../../assets/svg/Grid'
import TaskCardIcon from '../../../../assets/svg/TaskCard'
import TextEditor from '../../../elements/TextEditor'



const FeaturesSection = () => {
    return (
        <div className="FeaturesSection_Body px-4 sm:px-6 lg:px-8 flex flex-col gap-20 h-full items-center justify-center py-20 w-full">

            <div className="FeaturesSection_Header text-center">
                <h1 className="text-[5rem] leading-[130%] font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 select-none">
                    Powerfully simple.

                </h1>
                <p className="mt-3 max-w-4xl mx-auto text-xl text-slate-800 sm:text-2xl md:mt-5 md:text-3xl select-none">
                    Framer makes building professional sites easy, fast and fun while delivering best-in-class SEO, performance, and hosting.
                </p>
            </div>

            <div className="FeaturesSection_Main flex flex-col gap-6 max-w-[90rem] w-full">

                <div className="h-[70vh] w-full grid grid-rows-1 sm:grid-cols-2 md:grid-cols-12 gap-6 overflow-hidden">

                    <div className=" col-span-1 bg-gradient-to-tr h-full from-slate-200 to-slate-100 sm:col-span-8 p-1 rounded-2xl">
                        <div className='relative bg-gradient-to-tr h-full from-[#f2f2f2] via-[#a9d2f8] to-[#ffffff] rounded-2xl w-ful overflow-hidden '>
                            <div className='absolute z-[5] h-full w-full flex flex-col gap-5'>
                                <div className='py-10 px-24'>
                                    <h1 className='text-[34px] text-slate-800 font-bold select-none'>Everything is possible</h1>
                                    <p className='text-slate-500 text-[18px] font-medium max-w-2xl select-none'>Create amazing text with our new text editor that loads faster and is more responsive. Our new text editor is designed to save time in your daily life.</p>
                                </div>

                                <div className='overflow-hidden w-full h-96 scale-125 flex justify-center pt-[3vh]'>
                                    <div className='h-full w-[65%] TextArea bg-white rounded-lg p-5 overflow-hidden drop-shadow-md'>
                                        <TextEditor
                                            content={''}
                                            setContent={''}
                                            readonly={false}
                                            toolBarIsVisble={true}
                                            height={'h-[50vh]'}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="absolute z-20 bottom-10 flex justify-center opacity-[100%] w-full drop-shadow-xl">
                                <h1 className='rounded-full py-3 px-6 bg-[#0d113b] max-h-max max-w-max text-[14px] flex gap-3 items-center text-white select-none'> <LiveIcon /> Live Componenet</h1>
                            </div>

                            <div className="absolute z-10 bg-gradient-to-t bottom-0 from-[#a9d2f8] opacity-[100%] h-[20%] w-full"></div>
                            <div className="absolute z-[0]  opacity-[30%] h-full w-full overflow-hidden">
                                <GridSvg />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 sm:col-span-4 bg-gradient-to-tr  from-slate-200 to-slate-100 p-1 rounded-2xl">
                        <div className=' bg-gradient-to-r h-full from-[#0d113b] to-[#000212] rounded-2xl w-ful overflow-hidden flex flex-col justify-between gap-5'>
                            <div className='p-10'>
                                <h1 className='text-[32px] text-white font-bold select-none'>Edit Your Task</h1>
                                <p className='text-slate-300 text-[18px] font-medium max-w-xl select-none'>Track your tasks, update them and even delete them if you don't need them any more.</p>
                            </div>

                            <div className='w-full h-full flex justify-center'>
                                <TaskCardIcon height={500} />
                            </div>

                        </div>
                    </div>




                </div>

                <div className=" col-span-1 bg-gradient-to-tr  from-slate-200 to-slate-100 sm:col-span-8 p-1 rounded-2xl">
                    <div className='relative bg-gradient-to-tr h-full from-[#f2f2f2] via-[#cad3ff] to-[#ffffff] rounded-2xl w-ful overflow-hidden flex flex-col justify-between gap-5 md:gap-20'>
                        <div className='p-10'>
                            <h1 className='text-[32px] text-white font-bold'>Create Task</h1>
                            <p className='text-slate-300 text-[18px] font-medium max-w-xl'>Fly through your tasks with rapid-fire keyboard shortcuts for everything. Literally everything.</p>
                        </div>

                        <div className='overflow-hidden w-full h-96 scale-100 md:scale-125 md:flex md:justify-center'>
                            <div className='h-full'>

                            </div>
                        </div>

                        <div className="absolute z-10 bg-gradient-to-t bottom-0 from-[#cad3ff] opacity-[100%] h-[20%] w-full"></div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default FeaturesSection