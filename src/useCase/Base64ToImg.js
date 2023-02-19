export const base64SToImage = (base64String, filename) => {
    const mimeType = base64String.split(";")[0].split(":")[1]; // extract the MIME type
    const byteString = atob(base64String.split(",")[1]); // decode the base64 string
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
        uint8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([arrayBuffer], { type: mimeType }); // create a Blob object
    const file = new File([blob], filename, { type: mimeType }); // create a File object
    return file
}