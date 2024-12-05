import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { PlusCircle } from "lucide-react-native";
import { TodoLogo } from "@/assets/todo-logo";
import { ClipBoardIcon } from "@/assets/clipboard-icon";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Task } from '@/components/task';

import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";




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

                <View style={styles.tasks}>
                    <View style={styles.tasksHeader}>
                        <View style={styles.createdTasksInfo}>
                            <Text style={styles.createdTasksInfoText}>Criadas</Text>
                            <Text style={styles.createdTasksInfoNumber}>0</Text>
                        </View>
                        <View style={styles.completedTasksInfo}>
                            <Text style={styles.completedTasksInfoText}>Concluídas</Text>
                            <Text style={styles.completedTasksInfoNumber}>0</Text>
                        </View>
                    </View>
                    <ScrollView contentContainerStyle={styles.tasksList}>
                        <View style={styles.tasksListEmpty}>
                            <ClipBoardIcon />
                            <View style={styles.tasksListEmptyContent}>
                                <Text style={styles.tasksListEmptyTextStrong}>
                                    Você ainda não tem tarefas cadastradas
                                </Text>
                                <Text style={styles.tasksListEmptyText}>
                                    Crie tarefas e organize seus itens a fazer
                                </Text>
                            </View>
                        </View>

                        <Task
                            id="001"
                            description="Integer urna interdum massa libero auctor neque turpis turpis semper."
                            isCompleted={false}
                            onToggle={() => { }}
                            onDelete={() => { }}
                        />
                        <Task
                            id="001"
                            description="Integer urna interdum massa libero auctor neque turpis turpis semper."
                            isCompleted={true}
                            onToggle={() => { }}
                            onDelete={() => { }}
                        />
                        <Task
                            id="001"
                            description="Integer urna interdum massa libero auctor neque turpis turpis semper."
                            isCompleted={false}
                            onToggle={() => { }}
                            onDelete={() => { }}
                        />
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Task
                                key={Math.random() * 1000}
                                id="001"
                                description="Integer urna interdum massa libero auctor neque turpis turpis semper."
                                isCompleted={false}
                                onToggle={() => { }}
                                onDelete={() => { }}
                            />
                        ))}
                    </ScrollView>
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
        marginBottom: 32,
    },
    tasks: {
        flex: 1,
    },
    tasksHeader: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    createdTasksInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 8,
    },
    createdTasksInfoText: {
        fontSize: 14,
        fontFamily: fontFamily.bold,
        color: colors.blue[400],
    },
    createdTasksInfoNumber: {
        fontSize: 12,
        fontFamily: fontFamily.bold,
        color: colors.gray[200],
        backgroundColor: colors.gray[400],
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 9999,
    },
    completedTasksInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 8,
    },
    completedTasksInfoText: {
        fontSize: 14,
        fontFamily: fontFamily.bold,
        color: colors.purple[400],
    },
    completedTasksInfoNumber: {
        fontSize: 12,
        fontFamily: fontFamily.bold,
        color: colors.gray[200],
        backgroundColor: colors.gray[400],
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 9999,
    },
    tasksList: {
        width: '100%',
        gap: 8,
        paddingBottom: 64,
    },
    tasksListEmpty: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 48,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        borderTopWidth: 1,
        borderColor: colors.gray[400],
    },
    tasksListEmptyContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tasksListEmptyText: {
        fontSize: 14,
        fontFamily: fontFamily.regular,
        color: colors.gray[300],
    },
    tasksListEmptyTextStrong: {
        fontSize: 14,
        fontFamily: fontFamily.bold,
        color: colors.gray[300],
    }
})