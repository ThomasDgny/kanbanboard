import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { resizeFile } from "./ImageResizer";
import { base64SToImage } from "../useCase/Base64ToImg";

//const storageRef = ref(storage, `${user.uid}/${docRef}/${file.name}`);

export const handleFileUpload = async (path, file, fileType) => {
    if (file) {
        const storageRef = path
        const resized = await resizeFile(file, fileType)
        const base64ToImg = base64SToImage(resized, file.name)
        await uploadBytes(storageRef, base64ToImg);
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL
    }
};