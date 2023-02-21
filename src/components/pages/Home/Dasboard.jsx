import React from 'react'
import { UserAuth } from '../../../context/UserAuth';
import { useNavigate } from 'react-router-dom';
import ProjectCrad from './DashboardElements/ProjectCrad';
import Notes from './DashboardElements/Notes';
import { UserOp } from '../../../context/ProjectOp';


const Dasboard = () => {
    const { user } = UserAuth()
    const navigate = useNavigate()
    const { allProjects, docRefId } = UserOp()

    console.log(docRefId);
    return (
        <div className='Dasboard min-h-max flex'>
            <div className='min-w-[12vh]'></div>

            <div className='w-full flex-col flex gap-7'>

                <div className='Dashboard_Header pt-7 h-[15vh] justify-center px-14 flex items-center'>

                    <div className='Dashboard_Header_body w-full'>
                        <h1 className='text-[30px] font-bold '>{user?.email}</h1>
                        <p className='text-[16px] font-medium'>Welcome Back</p>
                    </div>

                </div>

                <hr />

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