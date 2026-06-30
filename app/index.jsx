import { Link } from "expo-router";
import { StyleSheet, Text } from "react-native";
import ThemedView from "../theme/themedView";

const Index = () => {
    return (
        <ThemedView safe={true} style={styles.container}>
            <Text style={styles.text}>Themed</Text>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // Optional: Makes the view take up the full screen
        justifyContent: "center", // Optional: Centers content vertically
        alignItems: "center", // Optional: Centers content horizontally
    },
    text: {
        color: "white", // Correct: Applied directly to the Text component
        fontSize: 18,
    },
});

export default Index;