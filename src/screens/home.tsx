import { TodoLogo } from "@/assets/todo-logo";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { View, StyleSheet, Text } from "react-native";


export default function Home() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TodoLogo />
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>
                    Home Page
                </Text>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray[600],
    },
    title: {
        fontSize: 16,
        fontFamily: fontFamily.regular,
        color: '#fafafa',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 173,
        backgroundColor: colors.gray[700],
    },
    headerImage: {
        height: 32,
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
    },
})