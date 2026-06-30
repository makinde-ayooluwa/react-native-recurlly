import { useColorScheme } from "react-native"
import { Colors } from "../constants/Colors";

const useTheme = ()=>{
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme] ?? Colors.light;
    return colors;
}
export default useTheme;