import React, { useEffect } from 'react'
import BoardMain from './boardElements/BoardMain'
import { useLocation } from 'react-router-dom'
import BoardHeader from './boardElements/BoardHeader'
import { UserOp } from '../../../context/ProjectOp'

const Board = () => {
    const { state: id } = useLocation()
    const { projectData, setDocRefId } = UserOp()
    // console.log(id);
    // console.log(projectData);

    useEffect(() => {
        setDocRefId(id)
    }, [id, setDocRefId])

    //console.log(projectData)


    return (
        <div className='Board flex overflow-x-scroll scrollbar-hide'>
            <div className='Board w-full flex flex-col gap-5 '>

                <BoardHeader id={id} projectData={projectData} />

                <hr className='w-full' />

                <BoardMain docRefId={id} />

            </div>
        </div>
    )
}

export default Board