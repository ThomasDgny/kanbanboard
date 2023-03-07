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
                    <h1 className='text-[24px] text-slate-800 font-bold'>Generela Progress</h1>
                </div>

                <div className='Notes_Body_Main flex flex-col gap-5'>
                    <div className='flex flex-col gap-3'>
                        <div className='CostumeProgressBar'>
                            <CostumeProgressBar
                                percentage={progress}
                                color={'#307EF3'}
                                height={'40px'}
                                borderRadius={5}
                            />
                        </div>

                        <div className='StatsNumber flex md:flex-row flex-col w-full gap-3'>
                            <div className='text-center w-full p-5 rounded-lg border'>
                                <label className='text-[20px] font-semibold'>{totalTask}</label>
                                <p>Task</p>
                            </div>

                            <div className='text-center w-full p-5 rounded-lg border'>
                                <label className='text-[20px] font-semibold'>{totalTodo}</label>
                                <p>Todo</p>
                            </div>

                            <div className='text-center w-full p-5 rounded-lg border'>
                                <label className='text-[20px] font-semibold'>{totalInProgress}</label>
                                <p>In Progress</p>
                            </div>

                            <div className='text-center w-full p-5 rounded-lg border'>
                                <label className='text-[20px] font-semibold'>{totalDone}</label>
                                <p>Done</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default GenerelStats