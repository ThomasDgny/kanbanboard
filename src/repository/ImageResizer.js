import Resizer from 'react-image-file-resizer';

export const resizeFile = (file, fileType) =>
    new Promise((resolve) => {
        Resizer.imageFileResizer(
            file,
            1500,
            1500,
            fileType,
            70,
            0,
            (uri) => {
                resolve(uri);
            },
            "base64"
        );
    });