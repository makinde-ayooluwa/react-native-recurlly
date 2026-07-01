import React, { useState } from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity, 
    Dimensions 
} from "react-native";
import Colors from "../../constants/Colors";
import { ScrollView } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <ScrollView style={styles.container}>
            {/* Header Section */}
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subtitle}>Please, sign in to your existing account</Text>
            </View>

            {/* Form Section */}
            <View style={styles.formContainer}>
                {/* Email Input */}
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputLabel}>EMAIL ADDRESS</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="example@gmail.com"
                        placeholderTextColor="#A0A5BA"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                {/* Password Input */}
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputLabel}>PASSWORD</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="••••••••"
                        placeholderTextColor="#A0A5BA"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                {/* Forgot Password */}
                <TouchableOpacity style={styles.forgotPasswordClick}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>

                {/* LOG IN Button */}
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>LOG IN</Text>
                </TouchableOpacity>

                {/* Signup Redirect */}
                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Don't have an account? </Text>
                    <TouchableOpacity>
                        <Text style={styles.signupLink}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                {/* Social Login Separator */}
                <View style={styles.separatorContainer}>
                    <View style={styles.line} />
                    <Text style={styles.separatorText}>OR LOG IN WITH</Text>
                    <View style={styles.line} />
                </View>

                {/* Social Buttons */}
                <View style={styles.socialContainer}>
                    <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#3B5998" }]}>
                        <Text style={styles.socialButtonText}>f</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#EA4335" }]}>
                        <Text style={styles.socialButtonText}>G</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors?.app || "#FF7622", // Defaulted to a classic food-app orange if Colors.app is undefined
    },
    headerContainer: {
        height: height * 0.25,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    title: {
        color: Colors.white || "#FFFFFF",
        fontSize: 30,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 8,
    },
    subtitle: {
        color: Colors.white || "#FFFFFF",
        fontSize: 14,
        textAlign: "center",
        opacity: 0.8,
    },
    formContainer: {
        flex: 1,
        backgroundColor: Colors.white || "#FFFFFF",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 24,
        paddingTop: 40,
    },
    inputWrapper: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 12,
        color: "#32343E",
        fontWeight: "600",
        marginBottom: 8,
        textTransform: "uppercase",
    },
    input: {
        backgroundColor: "#F6F6F6",
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 15,
        color: "#32343E",
    },
    forgotPasswordClick: {
        alignSelf: "flex-end",
        marginBottom: 24,
    },
    forgotPasswordText: {
        color: "#FF7622", // Food primary color color
        fontSize: 13,
        fontWeight: "600",
    },
    loginButton: {
        backgroundColor: "#FF7622", // Match this with your brand flavor color
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#FF7622",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4, // shadow for Android
    },
    loginButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 1,
    },
    signupContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 24,
        marginBottom: 30,
    },
    signupText: {
        color: "#646982",
        fontSize: 14,
    },
    signupLink: {
        color: "#FF7622",
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
        backgroundColor: "#EAEAEA",
    },
    separatorText: {
        marginHorizontal: 10,
        color: "#9C9BA6",
        fontSize: 12,
        fontWeight: "600",
    },
    socialContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 16,
    },
    socialButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    socialButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "700",
    },
});