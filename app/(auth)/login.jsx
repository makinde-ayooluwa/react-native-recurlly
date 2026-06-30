import { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useRouter } from "expo-router";
import Logo from "../../assets/favicon.png";
import { Colors } from "../../constants/Colors";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
  try {
    // const response = await login(email, password);

    setUser({email, password});

    router.replace("/home");
  } catch (err) {
    // Show an error message
  }
};

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />

        <Text style={styles.title}>Recurlly</Text>

        <Text style={styles.subtitle}>
          Connect. Chat. Stay in touch.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>Welcome Back 👋</Text>

        <Text style={styles.label}>Email</Text>

        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        <Text style={styles.label}>Password</Text>

        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>

        <Pressable onPress={() => router.push("/register")}>
          <Text style={styles.register}>
            Don't have an account? Sign Up
          </Text>
        </Pressable>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },

  logo: {
    width: 90,
    height: 90,
    marginBottom: 15,
  },

  title: {
    fontSize: 32,
    fontFamily: "Poppins-Bold",
    color: "#111827",
  },

  subtitle: {
    marginTop: 6,
    fontFamily: "Poppins-Regular",
    color: "#6B7280",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 22,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    elevation: 5,
  },

  heading: {
    fontSize: 22,
    fontFamily: "Poppins-Bold",
    marginBottom: 20,
    color: "#111827",
  },

  label: {
    marginBottom: 8,
    fontFamily: "Poppins-Medium",
    color: "#374151",
  },

  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 18,
    fontFamily: "Poppins-Regular",
    backgroundColor: "#F9FAFB",
  },

  button: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },

  register: {
    marginTop: 20,
    textAlign: "center",
    color: Colors.primary,
    fontFamily: "Poppins-Medium",
  },
});