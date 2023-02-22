import React from 'react'
import { UserAuth } from '../../../context/UserAuth';
import { useNavigate } from 'react-router-dom';
import ProjectCrad from './DashboardElements/ProjectCrad';
import Notes from './DashboardElements/Notes';
import { UserOp } from '../../../context/ProjectOp';


const Dasboard = () => {
    const { user, currentUserData } = UserAuth()
    const { allProjects } = UserOp()
    const navigate = useNavigate()

    const headerBgUrl = 'https://images.unsplash.com/photo-1676968986443-7f47aad7d993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80'

    return (
        <div className='Dasboard min-h-max flex'>
            <div className='min-w-[12vh]'></div>

            <div className='w-full flex-col flex gap-7'>

                <div className='Dashboard_Header relative h-[30vh] justify-center px-14 flex items-center'>

                    <div className='Dashboard_Header_body absolute px-14 z-10 w-full'>
                        <h1 className='text-[50px] font-bold  text-white leading-[130%] mb-3'>Hello {currentUserData.username}! <br /> Welcome Back</h1>
                        <p className='text-[18px] text-white'>{user?.email}</p>
                    </div>
                    <div className='Dashboard_Header_Bg absolute z-[1] w-full h-full bg-black opacity-30'></div>
                    <img src={headerBgUrl} alt="" className='Dashboard_Header_Bg absolute z-0 w-full h-full object-cover' />

                </div>

                <div className='Dasboard_Main px-14'>
                    <div className='Dasboard_Main_Body flex flex-col gap-8'>

                        <div className='flex justify-between gap-10'>
                            <h1 className='text-[24px] font-bold'>Projects</h1>
                            <button className='text-[16px] font-medium' onClick={() => navigate('/CreateProject')}>Create</button>
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