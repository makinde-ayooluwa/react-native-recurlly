import { Stack, Tabs } from "expo-router"
import { Text } from "react-native"

const Root = () => {
    return (
        <Tabs>
            <Tabs.Screen name="home" options={{ title: "Homepage", headerShown: false,}} />
            <Tabs.Screen name="profile" options={{ title: "Profile", headerShown: false,}} />
            <Tabs.Screen name="home/[id]" options={{ href: null, headerShown: false}} />
            <Tabs.Screen name="home/[id]/edit" options={{ href: null, headerShown: false}} />
            <Tabs.Screen name="home/[id]/[name]" options={{ href: null, headerShown: false}} />
            <Tabs.Screen name="home/[id]/[name]/edit" options={{ href: null, headerShown: false}} />
        </Tabs>
    )
}
export default Root