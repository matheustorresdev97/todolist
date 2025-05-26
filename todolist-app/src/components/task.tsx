import { TaskProps } from "@/interfaces/Task";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "./icons";
import { colors } from "@/styles/colors";

interface TasksProps extends TaskProps {
    taskDone: (id: string) => void;
    deleteTask: (id: string) => void;
}

export function Task({
    id,
    complete,
    description,
    taskDone,
    deleteTask,
}: TasksProps) {
    return (
        <View className="w-full h-16 bg-gray-500 rounded-lg my-1 px-3 py-5 flex-row items-center justify-between border border-gray-400">
            <TouchableOpacity onPressIn={() => taskDone(String(id))}>
                <Icon
                    name={
                        complete
                            ? "checkbox-marked-circle-outline"
                            : "checkbox-blank-circle-outline"
                    }
                    size={22}
                    color={complete ? colors.purple : colors.blue}
                />
            </TouchableOpacity>
            <View className="w-4/5 mx-2 h-10 items-center justify-center">
                <Text className={complete ? `text-sm text-gray-300 line-through` : `text-sm text-gray-100`}>
                    {description}
                </Text>
            </View>
            <TouchableOpacity onPressIn={() => deleteTask(String(id))}>
                <Icon name="trash-can-outline" size={20} color={colors.gray300} />
            </TouchableOpacity>
        </View>
    );
}