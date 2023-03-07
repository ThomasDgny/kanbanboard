import { getDownloadURL, uploadBytes } from "firebase/storage";
import { resizeFile } from "./ImageResizer";
import { base64SToImage } from "../useCase/Base64ToImg";


export const handleFileUpload = async (path, file, fileType, hight, width) => {
    const storageRef = path
    const resized = await resizeFile(file, fileType, hight, width)
    const base64ToImg = base64SToImage(resized, file.name)
    await uploadBytes(storageRef, base64ToImg);
    const downloadURL = await getDownloadURL(storageRef);
    console.log(downloadURL);
    return downloadURL
};