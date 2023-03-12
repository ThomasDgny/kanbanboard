import { Navigate } from "react-router-dom";
import { UserAuth } from "./UserAuth";

const ProtectedRoute = ({ child }) => {
    const user = UserAuth();
    if (user.uid) {
        return child
    } else {
        return <Navigate to={'/signin'} />
    }
}

export default ProtectedRoute;