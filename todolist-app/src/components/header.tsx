import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { Icon } from "./icons";
import { colors } from "@/styles/colors";

type HeaderProps = {
    task: string;
    onChangeText: (text: string) => void;
    onPress: () => void;
};

export function Header({ task, onChangeText, onPress }: HeaderProps) {
    return (
        <View className="bg-gray700 items-center justify-center w-full h-[173px] relative rounded-b-xl">
            <Image source={require("@/assets/logo.png")} />

            <View className="absolute -bottom-6 h-[52px] w-full flex-row items-center justify-center px-6">
                <TextInput 
                    className="h-14 w-3/4 bg-gray500 rounded-md text-gray100 p-4 text-base mr-1 border border-gray700"
                    value={task}
                    onChangeText={onChangeText}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={colors.gray300}
                />

                <TouchableOpacity 
                    className="w-14 h-14 rounded-md bg-blueDark items-center justify-center"
                    onPress={onPress}
                >
                    <Icon name="plus" size={22} color={colors.gray100} />
                </TouchableOpacity>
            </View>
        </View>
    );
}