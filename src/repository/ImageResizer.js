import Resizer from 'react-image-file-resizer';

export const resizeFile = (file, fileType, hight, width) =>
    new Promise((resolve) => {
        Resizer.imageFileResizer(
            file,
            hight,
            width,
            fileType,
            70,
            0,
            (uri) => {
                resolve(uri);
            },
            "base64"
        );
    });