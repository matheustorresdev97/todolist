import { Image, Text, View } from "react-native";

export function Empty() {
    return (
        <View className="flex-1 items-center w-full py-12 px-5 border border-gray-400 border-r-gray-600 border-b-gray-600 border-l-gray-600">
            <Image className="mb-4" source={require('@/assets/clipboard')} />
            <Text className="text-sm font-bold text-gray-300">
                Você ainda não tem tarefas cadastradas
            </Text>
            <Text className="text-sm font-normal text-gray-300">
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    );
}