import React, { useState } from 'react'
import { UserAuth } from '../../../context/UserAuth';
import { useNavigate } from 'react-router-dom';
import ProjectCrad from './DashboardElements/ProjectCrad';
import GenerelStats from './DashboardElements/GenerelStats';
import { UserOp } from '../../../context/ProjectOp';
import UserSettingsCard from './DashBoradComponentes/UserSettingsCard';
import { dateConverter } from '../../../useCase/DateConverter';


const Dasboard = () => {
    const [isUserSettingsOpen, setIsUserSettingsOpen] = useState(false)
    const { currentUserData } = UserAuth()
    const { allProjects } = UserOp()
    const navigate = useNavigate()
    //console.log(currentUserData);

    return (
        <div className='Dasboard min-h-max flex'>
            {
                isUserSettingsOpen &&
                <div >
                    <UserSettingsCard setIsUserSettingsOpen={setIsUserSettingsOpen} />
                </div>
            }
            <div className='w-full flex-col flex gap-7'>

                <div className='Dashboard_Header relative h-[120vh] md:h-[50vh] lg:h-[35vh] flex justify-center items-center'>

                    <div className='Dashboard_Header_body absolute z-10 w-[90%] flex flex-col md:flex-row items-center sm:gap-20 justify-between'>

                        <div className='Dashboard_Header_UserData'>
                            <h1 className='text-[50px] font-bold  text-white leading-[130%] mb-3'>Hello {currentUserData.username}! <br /> Welcome Back</h1>
                            <div className='flex gap-3'>
                                <p className='text-[18px] text-white'>{currentUserData.email}</p>
                                <p className='text-white'>&#8226;</p>
                                <p className='text-[18px] text-white'>{dateConverter(currentUserData.joindate)}</p>
                            </div>

                            <button onClick={() => setIsUserSettingsOpen(true)} className='UserSettings_Edit_Btn mt-5 rounded-full py-2 px-6 hover:bg-white text-white hover:text-black duration-300  border-[2px] text-[14px] font-medium'>Edit Profile</button>

                        </div>

                        <div className='Dashboard_Header_GenerelStats_Card w-full md:w-[70vh]'>
                            <GenerelStats />
                        </div>

                    </div>

                    <div className='Dashboard_Header_Bg absolute z-[1] w-full h-full bg-black opacity-30'></div>
                    <img src={currentUserData.coverimgurl} alt="" className='Dashboard_Header_Bg absolute z-0 w-full h-full object-cover' />
                </div>

                <div className='Dasboard_Main px-5 md:px-14 w-full'>
                    <div className='Dasboard_Main_Body w-full flex flex-col gap-8'>

                        <div className='flex justify-between gap-10'>
                            <h1 className='text-[24px] font-bold'>Projects</h1>
                            <button className='text-[16px] font-semibold text-blue-600' onClick={() => navigate('/create-project')}>Create New Project</button>
                        </div>

                        <div className='ProjectLsit flex flex-wrap gap-5 w-full'>
                            {allProjects.map((item, id) => (
                                <div key={id} className='ProjectCard '>
                                    <ProjectCrad item={item} />
                                </div>
                            ))
                            }
                        </div>

                    </div>
                </div>

            </div>



        </div>
    )
}

export default Dasboard