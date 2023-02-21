import React from 'react'
import { projectProgresBar } from '../../../../useCase/ProgressCal';
import { useNavigate } from 'react-router-dom';
import { dateConverter } from '../../../../useCase/DateConverter';
import DefaultImgIcon from '../../../../assets/icons/DefaultImg'
import CostumeProgressBar from '../../../elements/progressBar/ProgressBar';

const ProjectCrad = ({ item }) => {
    const navigate = useNavigate()
    //console.log(item.item.projectid);

    const handleOpenProject = () => {
        navigate(`/Board/${item.projectid}`, { state: item.projectid })
    }
    console.log(item);
    // console.log(item.projectid);

    console.log('Project progress bar result', projectProgresBar(item?.todo, item?.done));
    const progress = projectProgresBar(item.totaltask, item?.done)

    return (
        <div className='ProjectCard cursor-pointer bg-slate-200 rounded-lg hover:drop-shadow-2xl hover:duration-300' onClick={handleOpenProject}>
            <div className='w-[40vh] h-[40vh] relative flex flex-col gap'>
                <p className='absolute right-4 top-4 z-20 text-slate-300 text-[16px]'>#{item.projectid}</p>

                <div className='absolute z-20 px-5 py-5 flex flex-col justify-between bottom-0 w-full rounded-b-lg'>
                    <div>
                        <h1 className='text-white text-[30px] font-semibold mb-1'>{item.projectname}</h1>
                        <h1 className='text-white text-[16px]'>{dateConverter(item.createddate)}</h1>
                    </div>
                    <div className='py-3'>
                        <label className='text-white'>Progress</label>
                        <CostumeProgressBar
                            percentage={progress}
                            color={'#307EF3'}
                        />
                    </div>
                    <h1 className='py-2 px-4 text-[16px] bg-white text-gray-800 border border-slate-100 rounded-lg' >Total task: {item.totaltask}</h1>
                </div>

                <div className='absolute bg-black px-5 z-10 py-5 opacity-[50%] h-full w-full rounded-lg'></div>

                {item.projectlogo !== '' ?
                    <img src={item.projectlogo} className='absolute z-0 w-full h-full object-cover rounded-lg' alt="" />
                    :
                    <div className='bg-slate-300 w-full h-full rounded-md flex justify-center items-center'> <DefaultImgIcon /> </div>}
            </div>

        </div>
    )
}

export default ProjectCrad