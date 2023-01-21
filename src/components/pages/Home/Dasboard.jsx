import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../../Firebase';
import { UserAuth } from '../../../context/UserAuth';




const Dasboard = () => {
    const [ProjectName, setProjectName] = useState('')
    const { user } = UserAuth()


    const defultProjectStart = {
        projectname: ProjectName,
        bucket: [{
            id: 'todo',
            label: 'todo',
            list: []
        },
        {
            id: 'inprogress',
            label: 'inprogress',
            list: []
        },
        {
            id: 'done',
            label: 'done',
            list: []
        }],
    }

    const createNewProject = async (e) => {
        e.preventDefault()
        const collectionRef = collection(db, 'users', user.uid, 'projects')
        const docRef = await addDoc(collectionRef, defultProjectStart)
        console.log("Document written with ID: ", docRef.id);
    }


    return (
        <div>
            <form onSubmit={createNewProject}>
                <label>
                    Project Name:
                    <input required type="text" placeholder='Project Name' onChange={(e) => setProjectName(e.target.value.trim())} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <div>
                <h1>Projects</h1>
                <div>
                    {/* Projects here */}
                </div>
            </div>

        </div>
    )
}

export default Dasboard