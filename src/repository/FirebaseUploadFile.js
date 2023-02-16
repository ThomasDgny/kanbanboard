import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../Firebase";

export const handleFileUpload = async (file, setDownloadURL, user) => {
    if (file) {
        const storageRef = ref(storage, `${user.uid}/taskFile/${file.name}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        setDownloadURL(downloadURL);
        console.log(`File has been uploaded to: ${downloadURL}`);
    }
};