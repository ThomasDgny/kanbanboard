import React, { useEffect, useState } from 'react'
import BoardCard from '../KanbanCompanents/BoardCard/BoardCard'
import PlusIcon from '../../../../assets/icons/PlusIcon'
import { UserAuth } from '../../../../context/UserAuth'
import { db } from '../../../../Firebase'
import { getPickedProjects } from '../../../../repository/FirebaseGetPickedProject'
import TaskCreateCard from '../KanbanCompanents/BoardCard/TaskCreateCard'
import { collection, doc, getDoc, getDocs, onSnapshot, query } from 'firebase/firestore'


const BoardMain = ({ id }) => {
    const [projectsData, setProjectsData] = useState([])
    const [bucket, setBucket] = useState([])
    const [CreateTaskPopUp, setCreateTaskPopUp] = useState(false)
    const { user } = UserAuth()
    console.log(id)

    useEffect(() => {
        getPickedProjects(user, db, id).then((res) => setProjectsData(res))
    }, [id, user])
    console.log(projectsData)

    const buckets = projectsData?.bucket
    const TodoBuckets = buckets?.find(bucket => bucket.id === 'todo')
    const inProgressBuckets = buckets?.find(bucket => bucket.id === 'inprogress')
    const doneBuckets = buckets?.find(bucket => bucket.id === 'done')


    const getPickedProjectsBucket = async () => {
        if (!user) {
            return []
        }
        // const collectionRef = collection(db, 'users', user.uid, 'projects', id, 'bucket', 'todo', 'list')
        const q = query(collection(db, 'users', user.uid, 'projects', id, 'bucket', 'todo', 'list'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const listItems = [];
            querySnapshot.forEach((doc) => {
                listItems.push(doc.data());
            });
            console.log("Current cities in CA: ", listItems);
        });

        return unsubscribe
    }

    getPickedProjectsBucket()





    const handleCreateTask = () => {
        setCreateTaskPopUp(true)
    }

    return (
        <div className='Main max-w-[1400px]'>
            {
                !CreateTaskPopUp &&
                <TaskCreateCard id={id} />
            }

            <div className='MainBody grid grid-cols-3 gap-5 w-full'>

                <div className='Todo flex flex-col gap-5'>

                    <div className='TodoHeader'>
                        <button onChange={handleCreateTask} className='text-[22px] py-4 px-3 rounded-lg border border-[#D6E3EC] w-full flex items-center justify-between'>Todo <PlusIcon /></button>
                    </div>

                    <div className='TodoContent flex flex-col gap-5'>
                        {TodoBuckets?.list.map((item, id) => (
                            <BoardCard key={id} cardData={item} />
                        ))}
                    </div>

                </div>

                <div className='InProgress flex flex-col gap-5'>

                    <div className='TodoHeader'>
                        <button className='text-[22px] py-4 px-3 rounded-lg border border-[#D6E3EC] w-full flex items-center justify-between'>In Progress <PlusIcon /></button>
                    </div>

                    <div className='TodoContent flex flex-col gap-5'>
                        {inProgressBuckets?.list.map((item, id) => (
                            <BoardCard key={id} cardData={item} />
                        ))}
                    </div>

                </div>

                <div className='Done flex flex-col gap-5'>

                    <div className='TodoHeader'>
                        <button className='text-[22px] py-4 px-3 rounded-lg border border-[#D6E3EC] w-full flex items-center justify-between'>Done <PlusIcon /></button>
                    </div>

                    <div className='TodoContent flex flex-col gap-5'>
                        {doneBuckets?.list.map((item, id) => (
                            <BoardCard key={id} cardData={item} />
                        ))}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default BoardMain