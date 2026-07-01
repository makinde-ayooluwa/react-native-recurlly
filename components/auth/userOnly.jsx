import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";
import { useRouter } from "expo-router";

const UserOnly = ({ children }) => {
    const { user, setUser } = useContext(UserContext);
    const router = useRouter();
    useEffect(() => {
        if (user == null) {
            router.replace("/");
        } else {

        }
    }, [user])
}
export default UserOnly;