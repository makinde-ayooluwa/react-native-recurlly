import { UserContext } from "@/contexts/userContext";
import { Redirect } from "expo-router";
import { useContext } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function Index() {
  const { user } = useContext(UserContext);
  return user == null ? (
    <>
      <ActivityIndicator style={{ flex: 1, alignSelf: "center", justifyContent: "center" }} />
      <Redirect href="/login" />
    </>
  ) : (
    <>
      <ActivityIndicator style={{ flex: 1, alignSelf: "center", justifyContent: "center" }} />
      <Redirect href="/" />
    </>
  );
}
