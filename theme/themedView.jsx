import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ThemedView = ({ safe = false, style, children, ...rest }) => {
    // Combine standard styles with incoming styles
    const combinedStyle = [{ backgroundColor: "red" }, style];

    if (safe) {
        return (
            <SafeAreaView style={combinedStyle} {...rest}>
                {children}
            </SafeAreaView>
        );
    }

    return (
        <View style={combinedStyle} {...rest}>
            {children}
        </View>
    );
};

export default ThemedView;