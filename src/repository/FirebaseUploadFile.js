import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../Firebase";
import { resizeFile } from "./ImageResizer";
import { base64SToImage } from "../useCase/Base64ToImg";

export const handleFileUpload = async (file, user, docRef, fileType) => {
    if (file) {
        const storageRef = ref(storage, `${user.uid}/${docRef}/${file.name}`);
        const resized = await resizeFile(file, fileType)
        const base64ToImg = base64SToImage(resized, file.name)
        await uploadBytes(storageRef, base64ToImg);
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL
    }
};