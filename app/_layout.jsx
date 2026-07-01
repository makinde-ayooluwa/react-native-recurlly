import { Stack } from "expo-router";
import UserProvider, { UserContext } from "../contexts/userContext";
import { useContext } from "react";
export default function RootLayout() {
  return (
    <UserProvider>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" options={{}} />
        <Stack.Screen name="(auth)" options={{}} />
      </Stack>
    </UserProvider>
  );
}
