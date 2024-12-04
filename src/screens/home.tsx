import { TodoLogo } from "@/assets/todo-logo";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { PlusCircle } from "lucide-react-native";
import { View, StyleSheet, Text } from "react-native";


export default function Home() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TodoLogo />
            </View>

            <View style={styles.content}>
                <View style={styles.form}>
                    <Input placeholder="Adicione uma nova tarefa" />
                    <Button>
                        <PlusCircle size={16} color={colors.gray[100]} />
                    </Button>
                </View>
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
        marginTop: -28,
    },
    form: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
})