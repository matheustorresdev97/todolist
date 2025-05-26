import { Image, Text, View } from "react-native";

export function Empty() {
    return (
        <View className="flex-1 items-center w-full py-12 px-5 border border-gray400 border-r-gray600 border-b-gray600 border-l-gray600">
            <Image source={require("@/assets/clipboard.png")} />
            <Text className="text-sm font-bold text-gray300">
                Você ainda não tem tarefas cadastradas
            </Text>
            <Text className="text-sm font-normal text-gray300">
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    );
}