import React from 'react'

const ProjectCrad = (item , id) => {


    const projectProgress = () => {

        //const todoLength = projectsData.bucket.todo.list.length
        return (30 / 45) * 100
    }

    console.log(item.item)

    return (

        <div key={id}>
            <div>
                <h1>{item.item.projectname}</h1>
                <img src={item.item.projectlogo} className='w-[100px] h-[100px] object-cover rounded-md' alt="" />
            </div>
            <div>
                <p>{item?.item?.projectnotes?.length}21 Notes Taken</p>
            </div>
        </div>

    )
}

export default ProjectCrad