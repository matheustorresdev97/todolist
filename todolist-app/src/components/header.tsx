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
        <View className="bg-gray-700 items-center justify-center w-full h-[173px] relative rounded-b-xl">
            <Image source={require("@/assets/logo.png")} />

            <View className="absolute -bottom-6 h-[52px] w-full flex-row items-center justify-center">
                <TextInput className="w-[52px] h-[52px] rounded-md bg-blue-800 items-center justify-center" />

                <TouchableOpacity className="w-[52px] h-[52px] rounded-md bg-blue-800 items-center justify-center">
                    <Icon name="plus" size={22} color={colors.gray100} />
                </TouchableOpacity>
            </View>
        </View>
    )
}