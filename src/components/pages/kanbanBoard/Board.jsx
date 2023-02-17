import React, { useEffect, useState } from 'react'
import BoardMain from './boardElements/BoardMain'
import { useLocation } from 'react-router-dom'
import { getPickedProject } from '../../../repository/FirebaseGetPickedProject'
import { db } from '../../../Firebase'
import { UserAuth } from '../../../context/UserAuth'
import BoardHeader from './boardElements/BoardHeader'
import { UserOp } from '../../../context/ProjectOp'

const Board = () => {
    const [projectData, setProjectData] = useState([])

    const { state: id } = useLocation()
    const { setDocRefId } = UserOp()

    useEffect(() => {
        setDocRefId(id)
    }, [id, setDocRefId])


    const { user } = UserAuth()
    console.log(id);

    useEffect(() => {
        getPickedProject(user, db, id).then((res) => setProjectData(res))
    }, [id, user])
   // console.log(projectData)

    return (
        <div className='Board flex overflow-x-scroll scrollbar-hide'>
            <div className='min-w-[12vh] bg-red-700'></div>

            <div className='Board flex flex-col gap-5 '>

                <BoardHeader id={id} projectData={projectData} />

                <hr className='w-full'/>

                <BoardMain docRefId={id} />

            </div>
        </div>
    )
}

export default Board