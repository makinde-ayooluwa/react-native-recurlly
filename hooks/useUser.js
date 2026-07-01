import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState } from "react";

const useUser = () => {
    // const user =  AsyncStorage.getItem("user") ?? null;
    const [value, setValue] = useState(null);
    const setUser = (user) => {
        //  AsyncStorage.setItem("user", user);
         setValue(user);
    }
    return [value, setUser];
}
export default useUser;