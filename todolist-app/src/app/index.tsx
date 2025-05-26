import { Empty } from "@/components/empty";
import { Header } from "@/components/header";
import { Icon } from "@/components/icons";
import { Task } from "@/components/task";
import { TaskProps } from "@/interfaces/Task";
import { colors } from "@/styles/colors";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function Index() {
    const [description, setDescription] = useState("")
    const [tasks, setTasks] = useState<TaskProps[]>([])

    async function handleAddTask() {
        try {
            const response = await fetch('http://10.79.1.165:8080/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    description,
                    complete: false
                }),
            });
            const newTask = await response.json();
            setTasks([...tasks, newTask]);
            setDescription('');
        } catch (error) {
            console.error('Erro ao criar tarefa:', error);
            throw error;
        }
    }

    async function handleTaskDone({ id, value }: { id: number; value: boolean }) {
        try {
            const response = await fetch(`http://10.79.1.165:8080/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    complete: value
                }),
            });


            const updatedTask = await response.json();

            setTasks(tasks.map(task =>
                task.id === id ? { ...task, complete: updatedTask.complete } : task
            ));
        } catch (error) {
            console.error('Erro ao atualizar tarefa:', error);
            throw error;
        }
    }

    async function handleDeleteTask(id: number) {
        try {

            await fetch(`http://10.79.1.165:8080/tasks/${id}`, {
                method: 'DELETE'
            });

            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error('Erro ao remover tarefa:', error);
            throw error;
        }
    }

    async function loadTasks() {
        try {
            const response = await fetch('http://10.79.1.165:8080/tasks');
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error('Erro ao carregar tarefas:', error);
            throw error;
        }
    }

    useEffect(() => {
        loadTasks();
    }, []);

    const tasksCreated = tasks.length;
    const completeTasks = tasks.filter(({ complete }) => complete).length;


    return (
        <View className="flex-1 bg-base-gray600">
            <Header
                task={description}
                onChangeText={setDescription}
                onPress={handleAddTask}
            />
            <View className="flex-1 mt-14 mx-6">
                <View className="flex-row items-center justify-between mb-5">
                    <View className="flex-row items-center justify-center">
                        <Icon name="playlist-plus" size={24} color={colors.brand.blue} />
                        <Text className="text-brand-blue text-sm font-bold ml-1">Criadas</Text>
                        <View className="bg-base-gray400 w-[25px] h-[19px] rounded-full items-center justify-center ml-2">
                            <Text className="text-base-gray200 text-xs font-bold">{tasksCreated}</Text>
                        </View>
                    </View>
                    <View className="flex-row items-center">
                        <Icon name="playlist-check" size={24} color={colors.brand.purple} />
                        <Text className="text-brand-purple text-sm font-bold ml-1">Concluídas</Text>
                        <View className="bg-base-gray400 w-[25px] h-[19px] rounded-full items-center justify-center ml-2">
                            <Text className="text-base-gray200 text-xs font-bold">{completeTasks}</Text>
                        </View>
                    </View>
                </View>

                <FlatList
                    className="mt-5"
                    data={tasks}
                    keyExtractor={(task) => String(task.id)}
                    renderItem={({ item }) => (
                        <Task
                            key={item.id}
                            taskDone={() => handleTaskDone({ id: item.id, value: !item.complete })}
                            deleteTask={() => handleDeleteTask(item.id)}
                            {...item}
                        />
                    )}
                    ListEmptyComponent={() => <Empty />}
                />
            </View>
        </View>

    )
}