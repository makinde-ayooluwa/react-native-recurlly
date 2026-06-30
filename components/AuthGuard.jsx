import { useContext, useEffect } from "react";
import { useRouter, useSegments } from "expo-router";
import { UserContext } from "../contexts/UserProvider";

export default function AuthGuard({ children }) {
  const { user } = useContext(UserContext);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const inTabs = segments[0] === "(tabs)";

    if (!user && inTabs) {
      router.replace("/");
    }

    if (user && !inTabs) {
      router.replace("/(tabs)/home");
    }
  }, [user, segments]);

  return children;
}