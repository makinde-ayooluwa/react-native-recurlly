import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons"; 
import Colors from "../../constants/Colors";
import { UserContext } from "../../contexts/userContext";

const { width, height } = Dimensions.get("window");

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
const {user, setUser} = useContext(UserContext);
  const BRAND_COLOR = Colors?.app || "#FF6B35"; 
const handleLogin = ()=>{

}
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
        
        {/* Background Accent */}
        <View style={[styles.accentCircle, { backgroundColor: BRAND_COLOR, opacity: 0.2 }]} />
        
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <View style={[styles.logoPlaceholder, { backgroundColor: BRAND_COLOR }]}>
            <Text style={styles.logoText}>🍳</Text>
          </View>
          <Text style={styles.title}>Craving Something?</Text>
          <Text style={styles.subtitle}>Sign in to discover local flavors near you</Text>
        </View>

        {/* Form Sheet */}
        <View style={styles.formContainer}>
          
          {/* Email Input */}
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <View
              style={[
                styles.inputContainer,
                focusedInput === "email" 
                  ? { borderColor: BRAND_COLOR, backgroundColor: "#FFF" } 
                  : styles.inputDefaultBorder, // Safe layout fallback
              ]}
            >
              <Feather 
                name="mail" 
                size={20} 
                color={focusedInput === "email" ? BRAND_COLOR : "#A0A5BA"} 
                style={styles.inputIcon} 
              />
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#A0A5BA"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                onFocus={() => setFocusedInput("email")}
                onBlur={() => setFocusedInput(null)}
              />
            </View>
          </View>

          {/* Password Input */}
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Password</Text>
            <View
              style={[
                styles.inputContainer,
                focusedInput === "password" 
                  ? { borderColor: BRAND_COLOR, backgroundColor: "#FFF" } 
                  : styles.inputDefaultBorder, // Safe layout fallback
              ]}
            >
              <Feather 
                name="lock" 
                size={20} 
                color={focusedInput === "password" ? BRAND_COLOR : "#A0A5BA"} 
                style={styles.inputIcon} 
              />
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="#A0A5BA"
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={setPassword}
                onFocus={() => setFocusedInput("password")}
                onBlur={() => setFocusedInput(null)}
              />
              <TouchableOpacity 
                onPress={() => setPasswordVisible(!passwordVisible)}
                style={styles.eyeIcon}
              >
                <Feather 
                  name={passwordVisible ? "eye-off" : "eye"} 
                  size={20} 
                  color="#A0A5BA" 
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Forgot Password Link */}
          <TouchableOpacity style={styles.forgotPasswordClick}>
            <Text style={[styles.forgotPasswordText, { color: BRAND_COLOR }]}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity 
            style={[styles.loginButton, { backgroundColor: BRAND_COLOR, shadowColor: BRAND_COLOR }]}
            activeOpacity={0.8}
          >
            <Text style={styles.loginButtonText}>LOGIN</Text>
            <View style={styles.buttonIconCircle}>
              <Feather name="arrow-right" size={16} color={BRAND_COLOR} />
            </View>
          </TouchableOpacity>

          {/* Signup Redirect */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>New to the app? </Text>
            <TouchableOpacity>
              <Text style={[styles.signupLink, { color: BRAND_COLOR }]}>Create an Account</Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.separatorContainer}>
            <View style={styles.line} />
            <Text style={styles.separatorText}>OR CONNECT WITH</Text>
            <View style={styles.line} />
          </View>

          {/* Social Row */}
          <View style={styles.socialContainer}>
            <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
              <Text style={styles.socialIconTxt}>G</Text>
              <Text style={styles.socialAuthTxt}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton, styles.appleButton]}>
              <Text style={[styles.socialIconTxt, { color: '#FFF' }]}>
                🍏
              </Text>
              <Text style={[styles.socialAuthTxt, { color: '#FFF' }]}>Apple</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181C2E", 
  },
  accentCircle: {
    position: "absolute",
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: (width * 0.6) / 2,
    top: -50,
    right: -50,
  },
  headerContainer: {
    height: height * 0.32,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  logoPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    transform: [{ rotate: "-10deg" }],
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  logoText: {
    fontSize: 28,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: -0.5,
  },
  subtitle: {
    color: "#AEAEB2",
    fontSize: 14,
    textAlign: "center",
    marginTop: 6,
    lineHeight: 20,
  },
  formContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    paddingHorizontal: 24,
    paddingTop: 36,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.06,
    shadowRadius: 15,
    elevation: 10,
  },
  inputWrapper: {
    marginBottom: 18,
  },
  inputLabel: {
    fontSize: 13,
    color: "#32343E",
    fontWeight: "600",
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderWidth: 1.5,
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 56,
  },
  inputDefaultBorder: {
    borderColor: "#F6F6F6",
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#32343E",
    fontWeight: "500",
    outlineStyle: "none", // Removes the blue web browser border outline
  },
  eyeIcon: {
    padding: 4,
  },
  forgotPasswordClick: {
    alignSelf: "flex-end",
    marginBottom: 28,
  },
  forgotPasswordText: {
    fontSize: 13,
    fontWeight: "700",
  },
  loginButton: {
    flexDirection: "row",
    borderRadius: 16,
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 1.2,
  },
  buttonIconCircle: {
    position: "absolute",
    right: 16,
    backgroundColor: "#FFFFFF",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 24,
  },
  signupText: {
    color: "#646982",
    fontSize: 14,
  },
  signupLink: {
    fontSize: 14,
    fontWeight: "700",
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#F0F0F2",
  },
  separatorText: {
    marginHorizontal: 12,
    color: "#9C9BA6",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.8,
  },
  socialContainer: {
    flexDirection: "row",
    gap: 12,
  },
  socialButton: {
    flex: 1,
    flexDirection: "row",
    height: 52,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  googleButton: {
    backgroundColor: "#FFFFFF",
    borderColor: "#EAEAEA",
  },
  appleButton: {
    backgroundColor: "#181C2E",
    borderColor: "#181C2E",
  },
  socialIconTxt: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 8,
    color: "#32343E",
  },
  socialAuthTxt: {
    fontSize: 14,
    fontWeight: "600",
    color: "#32343E",
  },
});