import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowDownIcon from '../../../../assets/icons/ArrowDown';
import { UserAuth } from '../../../../context/UserAuth';
import { mockTask } from '../../../../mockdata/Tasks';
import BoardCard from '../../kanbanBoard/KanbanCompanents/BoardCard/BoardCard';

const HeroSection = () => {
    const navigate = useNavigate()
    const { user } = UserAuth()

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
                <div className="HeroSection_Body max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex h-full items-end py-10 md:py-20">
                    <div className="text-center w-full">
                       <div className='w-full text-center flex justify-center mb-5'>
                        <h4 className='bg-slate-800 font-medium text-white w-max text-center  py-2 px-4 rounded-full'>This website is a portfolio project.
                            comments and brands are not in touch with this website</h4>
                            </div>
                        <h1 className="text-[3rem] md:text-[5.5rem] sm:text-[4rem] mx-auto max-w-7xl font-bold leading-[120%] text-[#000000]">
                            Your Private Work Space Think. Make. Done.
                        </h1>
                        <p className="mt-3 max-w-4xl mx-auto text-lg text-slate-800 sm:text-2xl md:mt-5 md:text-[28px]">
                            Here you can find all the information you need
                        </p>
                        <div className="mt-14 max-w-full md:mx-auto flex flex-col md:flex-row justify-center items-center space-x-4">
                            <button onClick={handleCtaBtn} className="inline-flex text-[14px] md:text-[20px] items-center justify-center px-12 py-4 border rounded-md font-medium text-white hover:bg-[#1ec3ff] duration-300 bg-gradient-to-tr from-[#1ec3ff] to-[#008be8] border-[#00BCFF] focus:outline-none focus:ring-8 focus:ring-offset-2 focus:ring-[#e3f4ffb9] shadow-lg shadow-[#00bbff7e]">
                                Use on Web
                            </button>

                            <button className="inline-flex text-[14px] md:text-[18px] hover:underline hover:text-blue-600 duration-300 items-center justify-center px-6 py-3 gap-3 m-0 rounded-md font-medium text-black focus:outline-none focus:ring-8 focus:ring-offset-2 focus:ring-[#e3f4ffb9]">
                                <ArrowDownIcon />   Download for Windows
                            </button>

                            <button className="inline-flex text-[14px] md:text-[18px] hover:underline hover:text-blue-600 duration-300 items-center justify-center px-6 py-3 gap-3 m-0 rounded-md font-medium text-black focus:outline-none focus:ring-8 focus:ring-offset-2 focus:ring-[#e3f4ffb9]">
                                <ArrowDownIcon />    Download for Mac
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
