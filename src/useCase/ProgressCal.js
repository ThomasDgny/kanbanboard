export const projectProgress = (array) => {
    const itemBuckets = array.item.bucket
    const todoLength = itemBuckets.find(todo => todo.id === 'todo').list.length
    const inProgressLength = itemBuckets.find(todo => todo.id === 'inprogress').list.length
    
    return (todoLength / inProgressLength) * 100
}