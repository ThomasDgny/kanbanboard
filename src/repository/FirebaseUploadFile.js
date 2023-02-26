import { getDownloadURL, uploadBytes } from "firebase/storage";
import { resizeFile } from "./ImageResizer";
import { base64SToImage } from "../useCase/Base64ToImg";
import { generateRandomText } from "../useCase/RandomTextGenerator";



//const storageRef = ref(storage, `${user.uid}/${docRef}/${file.name}`);
const randomText = generateRandomText();
console.log(randomText);
export const handleFileUpload = async (path, file, fileType) => {
    const storageRef = path
    const resized = await resizeFile(file, fileType)
    const base64ToImg = base64SToImage(resized, file.name)
    await uploadBytes(storageRef, base64ToImg);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL
};