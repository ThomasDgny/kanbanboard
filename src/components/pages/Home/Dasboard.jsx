import React, { useState } from 'react'
import { UserAuth } from '../../../context/UserAuth';
import { useNavigate } from 'react-router-dom';
import ProjectCrad from './DashboardElements/ProjectCrad';
import Notes from './DashboardElements/Notes';
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
            <div className='min-w-[12vh]'></div>

            <div className='w-full flex-col flex gap-7'>

                <div className='Dashboard_Header relative h-[35vh] justify-center px-14 flex items-center'>

                    <div className='Dashboard_Header_body absolute px-14 z-10 w-full'>
                        <h1 className='text-[50px] font-bold  text-white leading-[130%] mb-3'>Hello {currentUserData.username}! <br /> Welcome Back</h1>
                        <div className='flex gap-3'>
                            <p className='text-[18px] text-white'>{currentUserData.email}</p>
                            <p className='text-white'>&#8226;</p>
                            <p className='text-[18px] text-white'>{dateConverter(currentUserData.joindate)}</p>
                        </div>
                    </div>

                    <button onClick={() => setIsUserSettingsOpen(true)} className='UserSettings_Edit_Btn absolute right-5 bottom-5 z-10 rounded-full py-2 px-6 bg-white text-[14px] font-medium'>Edit</button>

                    <div className='Dashboard_Header_Bg absolute z-[1] w-full h-full bg-black opacity-30'></div>
                    <img src={currentUserData.coverimgurl} alt="" className='Dashboard_Header_Bg absolute z-0 w-full h-full object-cover' />
                </div>

                <div className='Dasboard_Main px-14'>
                    <div className='Dasboard_Main_Body flex flex-col gap-8'>

                        <div className='flex justify-between gap-10'>
                            <h1 className='text-[24px] font-bold'>Projects</h1>
                            <button className='text-[16px] font-medium' onClick={() => navigate('/create-project')}>Create</button>
                        </div>

                        <div className='ProjectLsit flex flex-wrap gap-5'>
                            {allProjects.map((item, id) => (
                                <div key={id} className='ProjectCard'>
                                    <ProjectCrad item={item} />
                                </div>
                            ))
                            }
                        </div>

                    </div>
                </div>

            </div>

            <div className='Notes'>
                <Notes />
            </div>

        </div>
    )
}

export default Dasboard