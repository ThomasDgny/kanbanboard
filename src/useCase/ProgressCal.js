export const projectProgresBar = (array) => {
    const itemBuckets = array.bucket
    const todoLength = itemBuckets?.find(todo => todo.id === 'todo').list.length
    const inProgressLength = itemBuckets?.find(todo => todo.id === 'inprogress').list.length

    return (todoLength / inProgressLength) * 100
}