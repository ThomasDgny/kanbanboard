//import { addDoc, collection, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
//import { db } from '../../../../../Firebase'
import { UserAuth } from '../../../../../context/UserAuth'
import { newTask } from '../../../../../repository/FirebaseTaskCreater'

const TaskCreateCard = ({ id }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('todo')
    // const [severity, setSeverity] = useState('')
    // const [img, setImg] = useState()

    const { user } = UserAuth()
    console.log(id)

    const createNewTask = (e) => {
        e.preventDefault()
        newTask(user, title, description, status, id)
    }

    // const createBlog = async (e) => {
    //     e.preventDefault()

    //     if (user) {

    //         const newTask = {
    //             title: title,
    //             description: description,
    //             userId: user.uid,
    //             creationDate: new Date(),
    //             status: status
    //         }


    //         const collectionRef = collection(db, 'users', user.uid, 'projects', id, 'bucket', status, 'list')
    //         const docRef = await addDoc(collectionRef, newTask)

    //         await updateDoc(docRef, { projectid: docRef.id })

    //         return docRef
    //     }
    // }

    return (
        <div className='CreateCardPopUp absolute w-[80vh] h-[100vh] bg-slate-200 rounded-lg'>
            <div className='CreateCardPopUp_Body p-6'>

                <div>
                    <h1>Add a New Task</h1>
                </div>

                <div className='flex flex-col gap-6'>
                    <form onSubmit={createNewTask}>
                        <input type="text" required placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
                        <input type="text" required placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
                        <input type="text" required placeholder='Status' onChange={(e) => setStatus(e.target.value)} />
                        <input type="submit" value={'Create'} />
                    </form>

                </div>

            </div>
        </div>
    )
}

export default TaskCreateCard