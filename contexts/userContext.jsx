import { createContext } from "react";
import useUser from "../hooks/useUser";

export const UserContext = createContext();
export default function UserProvider({ children }) {
    const [ user, setUser ] = useUser();
    return (
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
            {children}
        </UserContext.Provider>
    )
}