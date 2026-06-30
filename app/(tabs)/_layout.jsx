import { Stack, Tabs } from "expo-router"
import { Text } from "react-native"

const Root = () => {
    return (
        <Tabs>
            <Tabs.Screen name="home" options={{ title: "Homepage", headerShown: false,}} />
            <Tabs.Screen name="profile" options={{ title: "Profile", headerShown: false,}} />
            </Tabs>
    )
}
export default Root