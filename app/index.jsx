import { Redirect } from "expo-router";
import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";

export default function Index() {
  const { user } = useContext(UserContext);

  if (user) {
    return <Redirect href="/(tabs)/home" />;
  }

  return <Redirect href="/login" />;
}