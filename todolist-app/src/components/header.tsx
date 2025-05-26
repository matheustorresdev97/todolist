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
        <View className="bg-base-gray700 items-center justify-center w-full h-[173px] relative rounded-b-xl">
            <Image source={require("@/assets/logo.png")} />

            <View className="absolute -bottom-6 h-[52px] w-full flex-row items-center justify-center">
                <TextInput 
                    className="h-14 w-3/4 bg-base-gray500 rounded-md text-base-gray100 p- text-base mr-1 border border-base-gray700"
                    value={task}
                    onChangeText={onChangeText}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={colors.base.gray300}
                />

                <TouchableOpacity 
                    className="w-14 h-14 rounded-md bg-brand-blueDark items-center justify-center"
                    onPress={onPress}
                >
                    <Icon name="plus" size={22} color={colors.base.gray100} />
                </TouchableOpacity>
            </View>
        </View>
    );
}