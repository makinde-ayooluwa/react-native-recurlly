import { Stack } from "expo-router"

const RootLayout = ()=>{
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerStyle:{backgroundColor:"red"}, title:"Index", headerShown:false}} />
            <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        </Stack>
    )
}
export default RootLayout