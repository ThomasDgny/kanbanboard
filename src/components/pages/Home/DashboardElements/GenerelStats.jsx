import React from 'react'
import { UserOp } from '../../../../context/ProjectOp'
import { projectProgresBar } from '../../../../useCase/ProgressCal';
import CostumeProgressBar from '../../../elements/progressBar/ProgressBar';

const GenerelStats = () => {
    const projectData = UserOp()

    const generalStats = projectData.allProjects
    const stats = generalStats.map(item => item.generalStats)
    const totalTodo = stats.map(item => item.todo).reduce((accumulator, value) => { return accumulator + value; }, 0);
    const totalInProgress = stats.map(item => item.inProgress).reduce((accumulator, value) => { return accumulator + value; }, 0);
    const totalDone = stats.map(item => item.done).reduce((accumulator, value) => { return accumulator + value; }, 0);
    const totalTask = stats.map(item => item.totaltask).reduce((accumulator, value) => { return accumulator + value; }, 0);

    const progress = projectProgresBar(totalTask, totalDone)

    return (
        <div className='GeneralStats bg-white rounded-md w-full h-full'>

            <div className='Notes_Body p-5 flex flex-col gap-5 h-full'>
                <div className='Notes_Body_Header flex items-center'>
                    <h1 className='text-[20px] text-slate-800 font-bold'>Generela Progress</h1>
                </div>

                <div className='Notes_Body_Main flex flex-col gap-5'>
                    <div className='flex flex-col gap-3'>
                        <div className='CostumeProgressBar'>
                            <CostumeProgressBar
                                percentage={progress}
                                color={'#307EF3'}
                                height={'30px'}
                                borderRadius={5}
                            />
                        </div>

                        <div className='StatsNumber flex md:flex-row flex-col w-full gap-3'>
                            <div className='text-center w-full p-3 rounded-lg border'>
                                <label className='text-[18px] font-semibold'>{totalTask}</label>
                                <p className='text-[14px]'>Task</p>
                            </div>

                            <div className='text-center w-full p-3 rounded-lg border'>
                                <label className='text-[18px] font-semibold'>{totalTodo}</label>
                                <p className='text-[14px]'>Todo</p>
                            </div>

                            <div className='text-center w-full p-3 rounded-lg border'>
                                <label className='text-[18px] font-semibold'>{totalInProgress}</label>
                                <p className='text-[14px]'>In Progress</p>
                            </div>

                            <div className='text-center w-full p-3 rounded-lg border'>
                                <label className='text-[18px] font-semibold'>{totalDone}</label>
                                <p className='text-[14px]'>Done</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default GenerelStats