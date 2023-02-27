import React from 'react'
import TaskCreateCard from '../../kanbanBoard/KanbanCompanents/BoardCard/TaskCreateCard'

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

                <div class="max-h-[70vh] w-full grid grid-cols-1 sm:grid-cols-12 gap-6 overflow-hidden">

                    <div className=" col-span-1 bg-gradient-to-tr  from-slate-200 to-slate-100 sm:col-span-8 p-1 rounded-2xl">
                        <div className='relative bg-gradient-to-tr h-full from-[#0d162b] to-[#153d5e] rounded-2xl w-ful overflow-hidden flex flex-col justify-between gap-20'>
                            <div className='p-10'>
                                <h1 className='text-[42px] text-white font-bold'>Create Task</h1>
                                <p className='text-slate-300 text-[20px] font-medium max-w-lg'>Fly through your tasks with rapid-fire keyboard shortcuts for everything. Literally everything.</p>
                            </div>

                            <div className='overflow-hidden w-full h-96 scale-125 md:flex md:justify-center'>
                                <div className='h-full'>
                                    <TaskCreateCard />
                                </div>
                            </div>

                            <div class="absolute z-10 bg-gradient-to-t bottom-0 from-[#0B1121] opacity-[100%] h-[20%] w-full"></div>
                        </div>
                    </div>





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