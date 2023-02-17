import React from 'react'
import { projectProgresBar } from '../../../../useCase/ProgressCal';
import { useNavigate } from 'react-router-dom';
import { Progress } from 'flowbite-react';
import { dateConverter } from '../../../../useCase/DateConverter';

const ProjectCrad = ({ item }) => {
    const navigate = useNavigate()
    //console.log(item.item.projectid);

    const handleOpenProject = () => {
        navigate(`/Board/${item.projectid}`, { state: item.projectid })
    }
    console.log(item);
    console.log(item.projectid);

    //console.log('Project progress bar result', projectProgresBar(item));


    return (
        <div className='ProjectCard cursor-pointer bg-slate-200 rounded-lg hover:drop-shadow-2xl hover:duration-300' onClick={handleOpenProject}>
            <div className='w-[40vh] h-[40vh] relative'>
               
                <div className='absolute z-20 px-5 py-5 flex flex-col justify-between bottom-0 top-[40%] w-full rounded-b-lg'>
                    <div>
                        <h1 className='text-white text-[24px] font-semibold mb-1'>{item.projectname}</h1>
                        <h1 className='text-white text-[16px]'>{dateConverter(item.createddate)}</h1>
                    </div>

                    <div>
                        <h1 className="text-base font-medium text-white">
                            Progress
                        </h1>
                        <Progress
                            progress={projectProgresBar(item)}
                            color="white"
                        />
                    </div>

                    <h1 className='py-2 px-4 text-[16px] bg-white text-gray-800 border border-slate-100 rounded-lg' >Total task: 352</h1>

                </div>
               
                <div className='absolute bg-black px-5 z-10 py-5 opacity-[50%] h-full w-full rounded-b-lg'></div>
               
                <img src={item.projectlogo} className='absolute z-0 w-full h-full object-cover rounded-lg' alt="" />


            </div>

        </div>
    )
}

export default ProjectCrad