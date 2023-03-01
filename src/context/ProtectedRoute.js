import { Navigate } from "react-router-dom";
import { UserAuth } from "./UserAuth";

// const ProtectedRoute = async ({ child }) => {
//     const user = UserAuth();
//     const waitUserData = (user) => {
//         if (user) {
//             return child
//         } else {
//             return <Navigate to={'/signin'} />
//         }
//     }
//     await waitUserData(user)

// };

// export default ProtectedRoute;

const ProtectedRoute = ({ child }) => {
    const user = UserAuth();
    return (
        user ? child : <Navigate to={'/signin'} />
    )
};

export default ProtectedRoute;