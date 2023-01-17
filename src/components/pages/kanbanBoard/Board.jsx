import React from 'react'
import BoardMain from './boardElements/BoardMain'

const Board = () => {
    return (
        <div>
            <div className='Board flex justify-center items-center w-full overflow-x-hidden'>
                <BoardMain />
            </div>
        </div>
    )
}

export default Board