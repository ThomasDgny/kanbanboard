import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../../../context/UserAuth';
import { mockTask } from '../../../../mockdata/Tasks';
import BoardCard from '../../kanbanBoard/KanbanCompanents/BoardCard/BoardCard';




const HeroSection = () => {
    const navigate = useNavigate()
    const user = UserAuth()

    const mockTaskRow1 = mockTask.slice(0, 5)
    const mockTaskRow2 = mockTask.slice(5, 10)
    const mockTaskRow3 = mockTask.slice(10, 15)
    const mockTaskRow4 = mockTask.slice(15, 20)
    const mockTaskRow5 = mockTask.slice(20, 25)

    const handleCtaBtn = () => {
        user ? navigate('/dashboard') : navigate('/signin')
    }

    return (
        <div className='w-full h-full'>
            <div className="absolute z-10 bg-gradient-to-t bottom-0 from-white opacity-[100%] h-[100%] w-full"></div>
            <div className="absolute z-0 from-white  opacity-[80%] h-full flex justify-center overflow-hidden w-full">
                <div className=' Comments_Main w-full flex justify-center h-[100vh] overflow-hidden'>
                    <div className='Comments_Main_Body flex gap-5 scroll-container overflow-hidden'>

                        <div className='commentRow1 flex flex-col gap-4'>
                            {
                                mockTaskRow1.map((item, id) => (
                                    <div key={id} >
                                        <BoardCard cardData={item} />
                                    </div>
                                ))
                            }
                        </div>

                        <div className='commentRow2 flex flex-col gap-4'>
                            {
                                mockTaskRow2.map((item, id) => (
                                    <div key={id}>
                                        <BoardCard cardData={item} />
                                    </div>
                                ))
                            }
                        </div>

                        <div className='commentRow3 flex flex-col gap-4'>
                            {
                                mockTaskRow3.map((item, id) => (
                                    <div key={id}>
                                        <BoardCard cardData={item} />
                                    </div>
                                ))
                            }
                        </div>

                        <div className='commentRow4 flex flex-col gap-4'>
                            {
                                mockTaskRow4.map((item, id) => (
                                    <div key={id}>
                                        <BoardCard cardData={item} />
                                    </div>
                                ))
                            }
                        </div>

                        <div className='commentRow3 flex flex-col gap-4'>
                            {
                                mockTaskRow5.map((item, id) => (
                                    <div key={id}>
                                        <BoardCard cardData={item} />
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>


            <div className="absolute z-20 w-full h-full">
                <div className="HeroSection_Body max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex h-full items-end py-20">
                    <div className="text-center">
                        <h1 className="text-[5rem] leading-[130%] font-bold text-transparent text-8xl text-[#000000]">
                            Your Private Work Space Think. Make. Done.
                        </h1>
                        <p className="mt-3 max-w-4xl mx-auto text-xl text-slate-800 sm:text-2xl md:mt-5 md:text-3xl">
                            Here you can find all the information you need
                        </p>
                        <div className="mt-5 max-w-md mx-auto flex justify-center space-x-4">
                            <button onClick={handleCtaBtn} className="inline-flex text-[24px] items-center justify-center px-12 py-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-blue-600 hover:bg-blue-500 duration-200 focus:outline-double focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
