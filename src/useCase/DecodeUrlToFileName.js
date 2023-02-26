export const getFilenameFromUrl = (url) => {
    const decodedUrl = decodeURIComponent(url);
    const urlParts = decodedUrl.split('?')[0].split('/');
    return urlParts[urlParts.length - 1];
}



