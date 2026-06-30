import { Stack } from "expo-router"
import { Text, TextInput } from "react-native";
import { useFonts } from "expo-font";
import useTheme from "../hooks/colorScheme";
import UserProvider from "../contexts/UserProvider";
import AuthGuard from "../components/AuthGuard";
const RootLayout = () => {
    const colors = useTheme();
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.style = {
        fontFamily: "Poppins-Bold",
    };

    TextInput.defaultProps = TextInput.defaultProps || {};
    TextInput.defaultProps.style = {
        fontFamily: "Poppins-Bold",
    };
    const [fontsLoaded] = useFonts({
        "Poppins-Regular": require("../assets/fonts/Poppins-Black.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    });
    return (
        <UserProvider>
            <AuthGuard>
                <Stack>
                <Stack.Screen name="index" options={{ headerStyle: { backgroundColor: "red" }, title: "Index", headerShown: false }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            </Stack>
            </AuthGuard>
        </UserProvider>
    )
}
export default RootLayout