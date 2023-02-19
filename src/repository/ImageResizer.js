import Resizer from 'react-image-file-resizer';

export const resizeFile = (file, fileType) =>
    new Promise((resolve) => {
        Resizer.imageFileResizer(
            file,
            1200,
            1200,
            fileType,
            50,
            0,
            (uri) => {
                resolve(uri);
            },
            "base64"
        );
    });