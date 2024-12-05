import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/fontFamily'
import { Check, Trash2 } from 'lucide-react-native'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Button } from './button'
import { TaskType } from '@/@types/task'

export type TaskProps = TaskType & {
    id: string
    description: string
    isCompleted: boolean
    onToggle: (id: string) => void
    onDelete: (id: string) => void
}

export function Task({
    id,
    description,
    isCompleted,
    onToggle,
    onDelete,
}: TaskProps) {
    return (
        <View style={styles.taskContainer}>
            <View style={styles.taskCheckContainer}>
                <Pressable
                    onPress={() => onToggle(id)}
                    style={[
                        styles.taskCheckCircle,
                        isCompleted && styles.taskCheckCircleChecked,
                        !isCompleted && styles.taskCheckCircleUnchecked,
                    ]}
                >
                    {isCompleted && (
                        <Check size={12} color={colors.gray[100]} strokeWidth={3} />
                    )}
                </Pressable>
            </View>
            <View style={styles.taskTextContainer}>
                <Text
                    style={[
                        !isCompleted && styles.taskText,
                        isCompleted && styles.taskDoneText,
                    ]}
                >
                    {description}
                </Text>
            </View>
            <View style={styles.trashContainer}>
                <Button variant="secondary" onPress={() => onDelete(id)}>
                    <Trash2 size={20} color={colors.gray[300]} />
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    taskContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.gray[400],
        backgroundColor: colors.gray[500],
    },
    taskCheckContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    taskCheckCircle: {
        width: 20,
        height: 20,
        borderRadius: 9999,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
    },
    taskCheckCircleUnchecked: {
        borderColor: colors.blue[400],
    },
    taskCheckCircleChecked: {
        borderColor: colors.purple[600],
        backgroundColor: colors.purple[600],
    },
    taskTextContainer: {
        flex: 1,
    },
    taskText: {
        fontSize: 14,
        fontFamily: fontFamily.regular,
        color: colors.gray[100],
    },
    taskDoneText: {
        fontSize: 14,
        fontFamily: fontFamily.regular,
        color: colors.gray[300],
        textDecorationLine: 'line-through',
    },
    trashContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})