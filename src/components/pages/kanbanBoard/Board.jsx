import React from 'react'
import BoardMain from './boardElements/BoardMain'
import { useLocation } from 'react-router-dom'

const Board = () => {
    const { state: id } = useLocation()
    console.log(id);
    return (
        <div>
            <div className='Board flex justify-center items-center w-full overflow-x-hidden'>
                <BoardMain id={id} />
            </div>
        </div>
    )
}

export default Board