import React from 'react'

const ProjectCrad = (item, id) => {

    const itemBuckets = item.item.bucket
    const todoLength = itemBuckets.find(todo => todo.id === 'todo').list.length
    const inProgressLength = itemBuckets.find(todo => todo.id === 'inprogress').list.length
    console.log(todoLength)
    console.log(inProgressLength)
    const projectProgress = (todoLength, inProgressLength) => {
        return (todoLength / inProgressLength) * 100
    }
    console.log(projectProgress(12, 50));




    return (

        <div key={id}>
            <div className='w-[100px]'>
                <img src={item.item.projectlogo} className='w-full h-[100px] object-cover rounded-md' alt="" />
                <div>
                    <h1>{item.item.projectname}</h1>
                    <p>{item?.item?.projectnotes?.length}21 Notes</p>
                </div>

            </div>

            <div>
                <p>{projectProgress(12, 50)}%</p>
            </div>

        </div>

    )
}

export default ProjectCrad