import React, { useEffect, useState } from 'react'
import BoardMain from './boardElements/BoardMain'
import { useLocation } from 'react-router-dom'
import { getPickedProject } from '../../../repository/FirebaseGetPickedProject'
import { db } from '../../../Firebase'
import { UserAuth } from '../../../context/UserAuth'

const Board = () => {
    const [projectsData, setProjectsData] = useState([])
    const { state: id } = useLocation()
    const { user } = UserAuth()
    console.log(id);

    useEffect(() => {
        getPickedProject(user, db, id).then((res) => setProjectsData(res))
    }, [id, user])
    console.log(projectsData)

    return (
        <div>
            <div className='Board flex justify-center items-center w-full overflow-x-hidden'>
                <BoardMain docRefId={id} />
            </div>
        </div>
    )
}

export default Board