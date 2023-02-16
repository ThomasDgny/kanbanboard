import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const toastMessage = (toastTypeNum, text) => {

    const style = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    }

    const toastTypes = {
        success: toast.success(text, style),
        toastDefault: toast(text, style),
        info: toast.info(text, style),
        error: toast.error(text, style),
    }
    // const success = toast.success(text, style);
    // const toastDefault = toast(text, style);
    // const info = toast.info(text, style);
    // const error = toast.error(text, style);
    return toastTypes[toastTypeNum]

}



