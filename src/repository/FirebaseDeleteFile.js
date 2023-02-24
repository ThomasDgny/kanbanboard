import { deleteObject } from "firebase/storage";

export const deleteFile = (path) => {
    const desertRef = path
    deleteObject(desertRef)
}