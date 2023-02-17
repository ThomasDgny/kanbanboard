import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../Firebase";

export const handleFileUpload = async (file, user, docRef) => {
    if (file) {
        const storageRef = ref(storage, `${user.uid}/${docRef}/${file.name}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL
    }
};