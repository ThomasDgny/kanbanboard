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
        <div onClick={handleOpenProject}>
            <div className='w-[30vh] h-[40vh] relative'>

                <img src={item.projectlogo} className=' absolute z-0 w-full h-full object-cover rounded-lg' alt="" />
                <div className='absolute bg-white px-5 py-5 opacity-[0%] bottom-0 top-[50%] w-full rounded-b-lg'></div>
                <div className='absolute px-5 py-5 flex flex-col justify-between bottom-0 top-[50%] w-full rounded-b-lg'>
                    <div>
                        <h1 className='text-[20px] font-semibold mb-1'>{item.projectname}</h1>
                        <h1 className='text-[16px]'>{dateConverter(item.createddate)}</h1>
                    </div>

                    <div>
                        <h1 className="text-base font-medium text-blue-700">
                            Progress
                        </h1>
                        <Progress
                            progress={projectProgresBar(item)}
                            color="blue"
                        />
                    </div>

                    <h1 className='py-2 px-4 text-[16px] bg-white text-gray-800 border border-slate-100 rounded-lg' >Total task: 352</h1>

                </div>

            </div>

        </div>
    )
}

export default ProjectCrad