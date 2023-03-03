import React from 'react'
import { UserOp } from '../../../../context/ProjectOp'
import { projectProgresBar } from '../../../../useCase/ProgressCal';
import CostumeProgressBar from '../../../elements/progressBar/ProgressBar';

const Notes = () => {
    const projectData = UserOp()

    console.log(projectData);

    const generalStats = projectData.allProjects

    const totalTodo = generalStats.map(item => item.todo).reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
    const totalDone = generalStats.map(item => item.done).reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
    const totalTask = generalStats.map(item => item.totaltask).reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
    console.log(generalStats);
    console.log(totalTodo);
    console.log(totalDone);
    console.log(totalTask);

    const progress = projectProgresBar(totalTask, totalDone)

    return (
        <div className='Notes bottom-0 top-0 right-0 w-[50vh] h-full'>

            <div className='Notes_Body px-6 flex flex-col gap-5 h-full'>
                <div className='Notes_Body_Header flex items-center'>
                    <h1 className='text-[24px] text-slate-800 font-bold'>Generela Stats</h1>
                </div>

                <div className='Notes_Body_Main flex flex-col gap-5'>
                    <div className='flex flex-col gap-3'>
                        <div className='StatsNumber flex w-full gap-3'>
                            <div className='text-center w-full p-5 rounded-lg border'>
                                <label className='text-[20px] font-semibold'>{totalTask}</label>
                                <p>Task</p>
                            </div>

                            <div className='text-center w-full p-5 rounded-lg border'>
                                <label className='text-[20px] font-semibold'>{totalTodo}</label>
                                <p>Todo</p>
                            </div>

                            <div className='text-center w-full p-5 rounded-lg border'>
                                <label className='text-[20px] font-semibold'>{totalDone}</label>
                                <p>Done</p>
                            </div>
                        </div>

                        <div className='CostumeProgressBar'>
                            <label className='text-slate-800 font-medium'>Progress</label>
                            <CostumeProgressBar
                                percentage={progress}
                                color={'#307EF3'}
                                height={'30px'}
                                borderRadius={5}
                            />
                        </div>
                    </div>

                    <div className='idkYet bg-slate-200 w-full h-[500px]'>
                        <label className='text-slate-800 font-medium'>Latest Tasks</label>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Notes